'use client';
import React from 'react';

import { motion } from 'framer-motion';

import { FUTILogo } from '@/app/components/main-layout/footer/logo';
import { Separator } from '@/app/components/ui/separator';
import { FTooltip } from '@/app/components/ui/tooltip';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type IFooterProps = BasicsProps<'footer'>;

export const Footer: React.FC<IFooterProps> = ({ className, style }) => (
  <footer
    className={cn('flex h-16 items-center gap-4 pl-6 max-sm:flex-col max-sm:pl-0 max-sm:pt-20', className)}
    style={style}
  >
    <FUTILogo
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      transition={{ duration: 0.2 }}
    />
    <motion.div
      className="max-sm:!hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.1 } }}
      transition={{ duration: 0.2 }}
    >
      <Separator orientation="vertical" className="h-8 bg-white/20" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.2 } }}
      transition={{ duration: 0.2 }}
    >
      <Separator className="mb-0.5 h-[3px] rounded bg-footer-line max-sm:my-2" />
      <div className="flex select-none gap-1 space-x-1 text-xs max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:pb-6 [&_a]:cursor-pointer [&_a]:font-bold [&_a]:text-white/30 [&_p]:text-white/20">
        <p>
          Copyright &copy; 2017 - {new Date().getFullYear()}
          <FTooltip text="🙃 Independent Websites Developer" sideOffset={16}>
            <a className="mx-1" href="https://www.lf112.net">
              LF112
            </a>
          </FTooltip>
          All rights reserved.
        </p>
        <p className="max-sm:hidden">/</p>
        <FTooltip text="AGPL-3.0" sideOffset={16}>
          <a href="https://github.com/LF112/futi-detroit" target="_blank" rel="noreferrer">
            Github Open Source
          </a>
        </FTooltip>
      </div>
    </motion.div>
  </footer>
);
