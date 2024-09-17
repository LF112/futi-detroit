import React from 'react';

import { SiBilibili, SiGithub, SiGmail, SiSteamdeck } from '@icons-pack/react-simple-icons';

import { buttonVariants } from '@/app/components/ui/button';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type ILinksProps = BasicsProps;

export const Links: React.FC<ILinksProps> = ({ className, style }) => (
  <div className={cn('flex gap-2', className)} style={style}>
    <a
      href="https://github.com/LF112"
      target="_blank"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'group cursor-pointer text-base font-bold text-[#ecf6ff]/85 hover:bg-accent/20 hover:text-white',
      )}
      rel="noreferrer"
    >
      <SiGithub className="mr-2 h-4 w-4 fill-[#ecf6ff] stroke-[#ecf6ff]/85" />
      Github
    </a>
    <a
      href="https://space.bilibili.com/131579371"
      target="_blank"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'group cursor-pointer text-base font-bold text-[#ecf6ff]/85 hover:bg-accent/20 hover:text-white',
      )}
      rel="noreferrer"
    >
      <SiBilibili className="mr-2 h-4 w-4 fill-[#ecf6ff] stroke-[#ecf6ff]/85" />
      BiliBili
    </a>
    <a
      href="https://steamcommunity.com/id/LF112"
      target="_blank"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'group cursor-pointer text-base font-bold text-[#ecf6ff]/85 hover:bg-accent/20 hover:text-white',
      )}
      rel="noreferrer"
    >
      <SiSteamdeck className="mr-2 h-4 w-4 fill-[#ecf6ff] stroke-[#ecf6ff]/85" />
      Steam
    </a>
    <a
      href="mailto://lf@lf112.net"
      target="_blank"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'group cursor-pointer text-base font-bold text-[#ecf6ff]/85 hover:bg-accent/20 hover:text-white',
      )}
      rel="noreferrer"
    >
      <SiGmail className="mr-2 h-4 w-4 fill-[#ecf6ff] stroke-[#ecf6ff]/85" />
      E-Mail
    </a>
  </div>
);
