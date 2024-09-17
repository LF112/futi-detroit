import React from 'react';

import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type IHeaderRibbonProps = BasicsProps;

export const HeaderRibbon: React.FC<IHeaderRibbonProps> = ({ className, style }) => (
  <div
    className={cn(
      'absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#37eff9] via-[#0091e4] to-[#64c6f4] shadow-sm',
      className,
    )}
    style={style}
  />
);
