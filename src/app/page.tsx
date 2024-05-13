import { FragShader } from '@/app/components/ui/frag-shader';
import { center_spread_shader } from '@/app/components/ui/frag-shader/consts';
import { env } from '@/env';

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      Hi there! 👋
      {env.NEXT_PUBLIC_COMMIT_HASH && (
        <span className="text-xs">{`version commit: ${env.NEXT_PUBLIC_COMMIT_HASH}`}</span>
      )}
      <div className="mt-5 h-60 w-96 overflow-clip rounded-md">
        <FragShader
          source={center_spread_shader}
          uniforms={{
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
              value: 1,
              type: 'uniform1f',
            },
          }}
        />
      </div>
    </div>
  );
}
