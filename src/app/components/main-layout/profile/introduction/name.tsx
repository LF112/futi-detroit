import React from 'react';

import { motion, MotionProps } from 'framer-motion';

import { Separator } from '@/app/components/ui/separator';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

type INameProps = BasicsProps & MotionProps;

export const Name: React.FC<INameProps> = ({ className, style, ...rest }) => (
  <motion.div className={cn('flex h-12 flex-col justify-center gap-2', className)} style={style} {...rest}>
    <h1 className="my-0 px-4 font-kanit text-3xl font-light text-white/90">
      Hi, I&apos;m <span className="font- font-normal text-white/90">LF112</span>
    </h1>
    <Separator className="h-[3px] w-full rounded bg-profile-line shadow" />
  </motion.div>
);
