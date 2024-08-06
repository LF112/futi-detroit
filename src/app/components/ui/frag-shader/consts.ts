import type { Uniforms } from '@/app/components/ui/frag-shader/index';

export const vertex_shader =
  '#version 300 es\nprecision mediump float;in vec2 coordinates;uniform vec2 u_resolution;out vec2 fragCoord;void main(void){gl_Position=vec4(coordinates,0.0,1.0);fragCoord=(coordinates+1.0)*0.5*u_resolution;fragCoord.y=u_resolution.y-fragCoord.y;}';

export const center_spread_shader =
  'float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);opacity *= step(intro_offset, u_time);opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time)) * 1.25, 1.0, 1.25);';

export const random_fade_in_shader = 'float intro_offset = random(st2) * 0.6;opacity *= step(intro_offset, u_time);';

export const futi_uniforms: Uniforms = {
  u_colors: {
    value: [
      [0.24, 0.55, 0.88],
      [0.24, 0.55, 0.88],
      [0.24, 0.55, 0.88],
      [0.24, 0.55, 0.88],
      [0.24, 0.55, 0.88],
      [0.24, 0.55, 0.88],
    ],
    type: 'uniform3fv',
  },
  u_opacities: {
    value: [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
    type: 'uniform1fv',
  },
  u_total_size: {
    value: 3,
    type: 'uniform1f',
  },
  u_dot_size: {
    value: 2,
    type: 'uniform1f',
  },
};
