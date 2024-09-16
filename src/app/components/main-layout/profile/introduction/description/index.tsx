'use client';
import React, { useState } from 'react';

import { useEventEmitter } from 'ahooks';
import { motion } from 'framer-motion';

import {
  TextDeveloper,
  TextDeveloperEvent,
} from '@/app/components/main-layout/profile/introduction/description/text-developer';
import { FUTIDynamicText } from '@/app/components/ui/dynamic-text';
import { cn } from '@/utils';

type IDescriptionProps = React.ComponentPropsWithoutRef<'div'>;

export const Description: React.FC<IDescriptionProps> = () => {
  const [inAnimation, setInAnimation] = useState<boolean>(true);

  const typingEvent$ = useEventEmitter<TextDeveloperEvent>();

  return (
    <div
      className={cn(
        'flex h-7 min-w-[313.58px] gap-1 after:-ml-2 [&>h2]:text-lg [&>h2]:text-white/80',
        inAnimation && 'futi-cursor',
      )}
    >
      <FUTIDynamicText
        className="font-ubuntu"
        as={motion.h2}
        onAnimationComplete={() => typingEvent$.emit(TextDeveloperEvent.START)}
      >
        A NodeJS Full Stack
      </FUTIDynamicText>
      <TextDeveloper event$={typingEvent$} onAnimationComplete={() => setInAnimation(false)} />
    </div>
  );
};
