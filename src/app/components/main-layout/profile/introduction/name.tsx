import React from 'react';

import { Separator } from '@/app/components/ui/separator';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/utils';

type INameProps = BasicsProps;

export const Name: React.FC<INameProps> = ({ className, style }) => (
  <div className={cn('flex h-12 flex-col justify-center gap-2', className)} style={style}>
    <h1 className="my-0 px-4 font-kanit font-light text-white/90">
      Hi, I&apos;m <span className="font- font-normal text-white/90">LF112</span>
    </h1>
    <Separator className="h-[3px] w-full rounded bg-profile-line shadow" />
  </div>
);
