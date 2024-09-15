'use client';
import React, { memo } from 'react';

import { HeaderRibbon } from '@/app/components/main-layout/header/ribbon';
import { FUTIDynamicText } from '@/app/components/ui/dynamic-text';

type IHeaderProps = React.ComponentPropsWithoutRef<'header'>;

export const Header: React.FC<IHeaderProps> = memo(() => (
  <header className="relative flex h-20 items-center">
    <HeaderRibbon />
    <FUTIDynamicText
      text="Copy and paste constant defaulting"
      className="futi-text-lyrics my-0 select-none pl-10 font-geometos text-base text-white/55"
    />
  </header>
));
Header.displayName = 'FUTI-Header';
