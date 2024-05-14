import React from 'react';

import { FutiClipPath } from '@/app/assets/svg/futi';
import { Blueprint } from '@/app/components/ui/blueprint';
import { FragShader } from '@/app/components/ui/frag-shader';
import { fuit_uniforms, random_fade_in_shader } from '@/app/components/ui/frag-shader/consts';

type IProfileWrapperProps = React.ComponentPropsWithoutRef<'div'>;

export const ProfileWrapper: React.FC<IProfileWrapperProps> = () => {
  return (
    <Blueprint>
      <div className="relative flex h-[25rem] w-[43.75rem] items-center justify-center">
        <div className="absolute -mb-2 -mr-6 h-32 w-80" style={{ clipPath: 'url(#futi-icon-clip)' }}>
          <FragShader source={random_fade_in_shader} uniforms={fuit_uniforms} />
        </div>
        <FragShader className="opacity-30 dark:opacity-20" uniforms={fuit_uniforms} />
        <FutiClipPath />
      </div>
    </Blueprint>
  );
};
