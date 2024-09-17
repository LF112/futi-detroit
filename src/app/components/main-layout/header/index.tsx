'use client';
import React, { memo } from 'react';

import { HeaderRibbon } from '@/app/components/main-layout/header/ribbon';
import { FUTIDynamicText } from '@/app/components/ui/dynamic-text';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type IHeaderProps = BasicsProps<'header'>;

export const Header: React.FC<IHeaderProps> = memo(({ className, style }) => (
  <header className={cn('relative flex h-20 items-center pt-1 max-sm:justify-center', className)} style={style}>
    <HeaderRibbon />
    <FUTIDynamicText
      text="Copy and paste constant defaulting"
      className="futi-text-lyrics my-0 select-none pl-10 font-geometos text-base text-white/55 max-sm:pl-0"
    />
  </header>
));
Header.displayName = 'FUTI-Header';
