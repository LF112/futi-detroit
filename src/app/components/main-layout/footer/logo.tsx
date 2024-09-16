import React from 'react';

import { FutiIcon } from '@/app/assets/svg/futi';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/app/components/ui/tooltip';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/utils';

type IFUTILogoProps = BasicsProps<'a'>;

export const FUTILogo: React.FC<IFUTILogoProps> = ({ className, ...rest }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        className={cn(
          'futi-center relative cursor-pointer select-none font-russoOne text-xs text-[#737373] text-opacity-15',
          className,
        )}
        {...rest}
      >
        Drawn by NAVILAB
        <FutiIcon className="absolute h-7 [&>path]:fill-white/20" />
      </a>
    </TooltipTrigger>
    <TooltipContent sideOffset={16}>Drawn by Navigator Kepler</TooltipContent>
  </Tooltip>
);
