'use client';
import React from 'react';

import { motion, MotionProps } from 'framer-motion';

import { FutiIcon } from '@/app/assets/svg/futi';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/app/components/ui/tooltip';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type IFUTILogoProps = BasicsProps<'a'> & MotionProps;

export const FUTILogo: React.FC<IFUTILogoProps> = ({ className, ...rest }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <motion.a
        href="https://www.futiwolf.com"
        className={cn(
          'futi-center relative cursor-pointer select-none font-russoOne text-xs text-[#737373] text-opacity-15',
          className,
        )}
        {...rest}
      >
        Drawn by NAVILAB
        <FutiIcon className="absolute h-7 [&>path]:fill-white/20" />
      </motion.a>
    </TooltipTrigger>
    <TooltipContent sideOffset={16}>Drawn by Navigator Kepler</TooltipContent>
  </Tooltip>
);
