'use client';
import React from 'react';

import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/utils';

type IProfileWrapperProps = BasicsProps<'div', 'children'>;

export const ProfileWrapper: React.FC<IProfileWrapperProps> = ({ children, className, style }) => (
  <div className={cn('relative', className)} style={style}>
    {children}
    <div className="absolute top-0 flex size-full justify-between before:absolute before:left-0 before:top-0 before:z-10 before:size-12 before:rounded before:border-l-4 before:border-t-4 before:border-[#0295e5]/85 after:absolute after:right-0 after:top-0 after:z-10 after:size-12 after:rounded after:border-r-4 after:border-t-4 after:border-[#0295e5]/85">
      <div className="z-0 my-4 h-[calc(100%-2rem)] w-[3.5px] bg-[#6e6e6e]/55" />
      <div className="z-0 my-4 h-[calc(100%-2rem)] w-[3.5px] bg-[#6e6e6e]/55" />
      <div className="absolute bottom-12 w-full before:absolute before:left-0 before:top-0 before:z-10 before:size-12 before:rounded before:border-b-4 before:border-l-4 before:border-[#0295e5]/85 after:absolute after:right-0 after:top-0 after:z-10 after:size-12 after:rounded after:border-b-4 after:border-r-4 after:border-[#0295e5]/85" />
    </div>
  </div>
);
