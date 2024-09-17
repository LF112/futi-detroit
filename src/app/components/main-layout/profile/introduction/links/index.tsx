import React from 'react';

import { LINKS } from '@/app/components/main-layout/profile/introduction/links/consts';
import { buttonVariants } from '@/app/components/ui/button';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type ILinksProps = BasicsProps;

export const Links: React.FC<ILinksProps> = ({ className, style }) => (
  <div className={cn('flex gap-2 max-sm:gap-1', className)} style={style}>
    {LINKS.map(({ Icon, href, label }, i) => (
      <a
        key={i}
        href={href}
        target="_blank"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'group cursor-pointer text-base font-bold text-[#ecf6ff]/85 hover:bg-accent/20 hover:text-white max-sm:px-2',
        )}
        rel="noreferrer"
      >
        <Icon className="mr-2 h-4 w-4 fill-[#ecf6ff] stroke-[#ecf6ff]/85" />
        {label}
      </a>
    ))}
  </div>
);
