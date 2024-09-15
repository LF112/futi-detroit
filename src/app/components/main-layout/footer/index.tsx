import React from 'react';

import { FUTILogo } from '@/app/components/main-layout/footer/logo';
import { Separator } from '@/app/components/ui/separator';
import { FTooltip } from '@/app/components/ui/tooltip';

type IFooterProps = React.ComponentPropsWithoutRef<'footer'>;

export const Footer: React.FC<IFooterProps> = () => (
  <footer className="flex h-16 items-center gap-4 pl-6">
    <FUTILogo />
    <Separator orientation="vertical" className="h-8 bg-white/20" />
    <div>
      <Separator className="mb-0.5 h-[3px] rounded bg-footer-line" />
      <div className="flex select-none gap-1 space-x-1 text-xs [&_a]:cursor-pointer [&_a]:font-bold [&_a]:text-white/30 [&_p]:text-white/20">
        <p>
          Copyright &copy; 2017 - {new Date().getFullYear()}
          <FTooltip text="🙃 Independent Websites Developer" sideOffset={16}>
            <a className="mx-1">LF112</a>
          </FTooltip>
          All rights reserved.
        </p>
        <p>/</p>
        <FTooltip text="AGPL-3.0" sideOffset={16}>
          <a>Github Open Source</a>
        </FTooltip>
      </div>
    </div>
  </footer>
);
