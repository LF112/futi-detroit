import React from 'react';

import { FUTILogo } from '@/app/components/main-layout/footer/logo';
import { Separator } from '@/app/components/ui/separator';
import { FTooltip } from '@/app/components/ui/tooltip';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type IFooterProps = BasicsProps<'footer'>;

export const Footer: React.FC<IFooterProps> = ({ className, style }) => (
  <footer className={cn('flex h-16 items-center gap-4 pl-6 max-sm:flex-col max-sm:pl-0', className)} style={style}>
    <FUTILogo />
    <Separator orientation="vertical" className="h-8 bg-white/20 max-sm:hidden" />
    <div>
      <Separator className="mb-0.5 h-[3px] rounded bg-footer-line max-sm:my-2" />
      <div className="flex select-none gap-1 space-x-1 text-xs max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:pb-6 [&_a]:cursor-pointer [&_a]:font-bold [&_a]:text-white/30 [&_p]:text-white/20">
        <p>
          Copyright &copy; 2017 - {new Date().getFullYear()}
          <FTooltip text="🙃 Independent Websites Developer" sideOffset={16}>
            <a className="mx-1">LF112</a>
          </FTooltip>
          All rights reserved.
        </p>
        <p className="max-sm:hidden">/</p>
        <FTooltip text="AGPL-3.0" sideOffset={16}>
          <a>Github Open Source</a>
        </FTooltip>
      </div>
    </div>
  </footer>
);
