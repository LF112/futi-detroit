'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { vertex_shader } from '@/app/components/ui/frag-shader/consts';
import { compileShader } from '@/app/components/ui/frag-shader/utils';
import { cn } from '@/lib/utils';

type UniformValue = number | number[] | number[][] | Float32Array;
export type Uniforms = Record<
  string,
  {
    type: string;
    value: UniformValue;
  }
>;

interface IFragShaderProps {
  className?: string;

  source?: string;
  center?: ['x' | 'y'];
  uniforms?: Uniforms;
  maxFPS?: number;
}
export const FragShader: React.FC<IFragShaderProps> = ({
  source = '',
  center = ['x', 'y'],
  uniforms,
  maxFPS = 60,
  className,
}) => {
  const webglRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>();

  const [dpi, setDpi] = useState<number>();

  const [gl2, setGl2] = useState<WebGL2RenderingContext | null>(null);
  const [csc, setCsc] = useState<CanvasRenderingContext2D | null>(null);

  const [glShaderProgram, setGlShaderProgram] = useState<WebGLProgram | null>(null);

  const shader = useMemo(
    () =>
      '#version 300 es\nprecision mediump float;in vec2 fragCoord;uniform float u_time;uniform float u_opacities[10];uniform vec3 u_colors[6];uniform float u_total_size;uniform float u_dot_size;uniform vec2 u_resolution;out vec4 fragColor;float PHI=1.61803398874989484820459;float random(vec2 xy){return fract(tan(distance(xy*PHI,xy)*0.5)*xy.x);}float map(float value,float min1,float max1,float min2,float max2){return min2+(value-min1)*(max2-min2)/(max1-min1);}void main(){vec2 st=fragCoord.xy;'
        .concat(center.includes('x') ? 'st.x-=abs(floor((mod(u_resolution.x,u_total_size)-u_dot_size)*0.5));' : '')
        .concat(
          center.includes('y') ? 'st.y-=abs(floor((mod(u_resolution.y,u_total_size)-u_dot_size)*0.5));' : '',
          'float opacity=step(0.0, st.x);opacity*=step(0.0,st.y);vec2 st2=vec2(int(st.x/u_total_size),int(st.y/u_total_size));float frequency=5.0;float show_offset=random(st2);float rand=random(st2*floor((u_time/frequency)+show_offset+frequency)+1.0);opacity*=u_opacities[int(rand*10.0)];opacity*=1.0-step(u_dot_size/u_total_size,fract(st.x/u_total_size));opacity*=1.0-step(u_dot_size/u_total_size,fract(st.y/u_total_size));vec3 color=u_colors[int(show_offset*6.0)];',
        )
        .concat(source, 'fragColor=vec4(color,opacity);fragColor.rgb*=fragColor.a;}'),
    [source, center],
  );

  useEffect(() => {
    canvasRef.current = document.createElement('canvas');

    const resizeObserver = new ResizeObserver(() => {
      if (webglRef.current && canvasRef.current) {
        const { offsetWidth, offsetHeight } = webglRef.current;
        const dpi = Math.max(1, Math.min(window.devicePixelRatio ?? 1, 2));
        setDpi(dpi);
        const finalHeight = offsetHeight * dpi;
        const finalWidth = offsetWidth * dpi;
        webglRef.current.width = finalWidth;
        webglRef.current.height = finalHeight;
        canvasRef.current.width = finalWidth;
        canvasRef.current.height = finalHeight;
      }
    });

    if (webglRef.current) {
      resizeObserver.observe(webglRef.current);
      setGl2(webglRef.current.getContext('webgl2'));
      setCsc(canvasRef.current.getContext('2d'));
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!gl2 || !webglRef.current || !dpi) return;

    const vertexShader = compileShader(gl2, gl2.VERTEX_SHADER, vertex_shader);
    const fragmentShader = compileShader(gl2, gl2.FRAGMENT_SHADER, shader);

    if (!vertexShader || !fragmentShader) {
      console.warn('[FUTI-Shader]: Failed to compile shaders');
      return;
    }

    const shaderProgram = gl2.createProgram();
    if (!shaderProgram) {
      console.error('[FUTI-Shader]: Failed to create shader program');
      return;
    }
    setGlShaderProgram(shaderProgram);

    gl2.attachShader(shaderProgram, vertexShader);
    gl2.attachShader(shaderProgram, fragmentShader);
    gl2.linkProgram(shaderProgram);

    if (!gl2.getProgramParameter(shaderProgram, gl2.LINK_STATUS)) {
      console.error(`[FUTI-Shader]: Unable to initialize the shader program: ${gl2.getProgramInfoLog(shaderProgram)}`);
      gl2.deleteProgram(shaderProgram);
      return;
    }

    gl2.useProgram(shaderProgram);

    const shaderBuffer1 = gl2.createBuffer();
    gl2.bindBuffer(gl2.ARRAY_BUFFER, shaderBuffer1);
    const shaderVertices2 = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    gl2.bufferData(gl2.ARRAY_BUFFER, shaderVertices2, gl2.STATIC_DRAW);

    const shaderBuffer2 = gl2.createBuffer();
    gl2.bindBuffer(gl2.ARRAY_BUFFER, shaderBuffer2);
    gl2.bufferData(gl2.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl2.STATIC_DRAW);

    const coordinates = gl2.getAttribLocation(shaderProgram, 'coordinates');
    gl2.enableVertexAttribArray(coordinates);
    gl2.vertexAttribPointer(coordinates, 2, gl2.FLOAT, false, 0, 0);
    const resolution = gl2.getUniformLocation(shaderProgram, 'u_resolution');

    for (const [uniformName, uniformData] of Object.entries(uniforms ?? {})) {
      const uniformLocation = gl2.getUniformLocation(shaderProgram, uniformName);
      if (!uniformLocation) continue;

      switch (uniformData.type) {
        case 'uniform1f': {
          gl2.uniform1f(uniformLocation, uniformData.value as number);
          break;
        }
        case 'uniform3f': {
          // @ts-expect-error
          gl2.uniform3f(uniformLocation, ...(uniformData.value as number[]));
          break;
        }
        case 'uniform1fv': {
          gl2.uniform1fv(uniformLocation, uniformData.value as Float32Array);
          break;
        }
        case 'uniform3fv': {
          gl2.uniform3fv(uniformLocation, (uniformData.value as number[]).flat());
          break;
        }
        default: {
          break;
        }
      }
    }

    gl2.uniform2f(resolution, webglRef.current.width / dpi, webglRef.current.height / dpi);
    gl2.enable(gl2.BLEND);
    gl2.blendFunc(gl2.SRC_ALPHA, gl2.ONE);
    gl2.disable(gl2.DEPTH_TEST);

    return () => {
      if (shaderProgram) {
        gl2.deleteShader(vertexShader);
        gl2.deleteShader(fragmentShader);
        gl2.deleteProgram(shaderProgram);
      }
    };
  }, [gl2, source, dpi]);

  useEffect(() => {
    let animationFrameId: number;
    if (gl2 && glShaderProgram) {
      let previousTime: number | null = null;
      let previousTimestamp = 0;

      const u_time = gl2.getUniformLocation(glShaderProgram, 'u_time');
      const u_scroll = gl2.getUniformLocation(glShaderProgram, 'u_scroll');

      const render = (currentTime: number) => {
        if (!gl2 || !csc || !webglRef.current || !canvasRef.current) {
          console.warn('[FUTI-Shader]: WebGL context not available');
          return;
        }
        const t = currentTime / 1e3;
        if (previousTime === null) previousTime = t;

        if (maxFPS !== Infinity) {
          if (currentTime - previousTimestamp < 1e3 / maxFPS) {
            animationFrameId = requestAnimationFrame(render);
            return;
          }
          previousTimestamp = currentTime;
        }

        const delta = t - previousTime;
        gl2.viewport(0, 0, gl2.canvas.width, gl2.canvas.height);
        gl2.uniform1f(u_time, delta);
        gl2.uniform1f(u_scroll, window.scrollY ?? 0);
        gl2.clear(gl2.COLOR_BUFFER_BIT | gl2.DEPTH_BUFFER_BIT);

        gl2.drawArrays(gl2.TRIANGLE_STRIP, 0, 4);
        csc.clearRect(0, 0, webglRef.current.width, webglRef.current.height);
        csc.drawImage(canvasRef.current, 0, 0);

        animationFrameId = requestAnimationFrame(render);
      };

      animationFrameId = requestAnimationFrame(render);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [gl2, glShaderProgram, maxFPS]);

  return <canvas ref={webglRef} className={cn('size-full', className)} />;
};
