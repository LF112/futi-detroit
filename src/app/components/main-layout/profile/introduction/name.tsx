import React from 'react';

import { Separator } from '@/app/components/ui/separator';

type INameProps = React.ComponentPropsWithoutRef<'div'>;

export const Name: React.FC<INameProps> = () => (
  <div className="flex h-12 flex-col justify-center gap-2">
    <h1 className="my-0 px-4 font-kanit font-light text-white/90">
      Hi, I&apos;m <span className="font- font-normal text-white/90">LF112</span>
    </h1>
    <Separator className="h-[3px] w-full rounded bg-profile-line shadow" />
  </div>
);
