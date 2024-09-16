import React from 'react';

import { SiBilibili, SiGithub, SiGmail, SiSteamdeck } from '@icons-pack/react-simple-icons';

import { buttonVariants } from '@/app/components/ui/button';
import { cn } from '@/utils';

type ILinksProps = React.ComponentPropsWithoutRef<'div'>;

export const Links: React.FC<ILinksProps> = () => (
  <div className="flex gap-2">
    <a
      href="https://github.com/LF112"
      target="_blank"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'group cursor-pointer text-base font-bold text-[#ecf6ff]/85 hover:bg-accent/20 hover:text-white',
      )}
      rel="noreferrer"
    >
      <SiGithub className="mr-2 h-4 w-4 stroke-[#ecf6ff]/85" />
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
      <SiBilibili className="mr-2 h-4 w-4 stroke-[#ecf6ff]/85" />
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
      <SiSteamdeck className="mr-2 h-4 w-4 stroke-[#ecf6ff]/85" />
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
      <SiGmail className="mr-2 h-4 w-4 stroke-[#ecf6ff]/85" />
      E-Mail
    </a>
  </div>
);
