/* eslint-disable react-refresh/only-export-components */
'use client';
import React, { useEffect, useRef, useState } from 'react';

import { useMemoizedFn } from 'ahooks';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';

import { Highlighter } from '@/app/components/ui/highlighter';
import { BasicsProps } from '@/app/components/ui/types';
import { cn } from '@/lib/utils';

export enum TextDeveloperEvent {
  START = 'start',
}
type ITextDeveloperProps = BasicsProps<'h2'> & {
  event$?: EventEmitter<TextDeveloperEvent>;
  onAnimationComplete?: () => void;
};

const WORD = String.raw`<Developer />`;
const TYPING_SPEED = 15;

export const TextDeveloper: React.FC<ITextDeveloperProps> = ({ event$, onAnimationComplete, className, style }) => {
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const [inAnimation, setInAnimation] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState<string>('');

  const letterIndex = useRef<number>(0);
  const prevText = useRef<string>('');

  const typeNextLetter = useMemoizedFn(async () => {
    setInAnimation(true);
    if (letterIndex.current < WORD.length) {
      prevText.current += WORD.charAt(letterIndex.current);
      setDisplayedText(prevText.current);
      letterIndex.current++;
      typingTimeout.current = setTimeout(typeNextLetter, TYPING_SPEED);
    } else {
      await new Promise((resolve) => setTimeout(resolve, 200));
      onAnimationComplete?.();

      setInAnimation(false);
    }
  });

  useEffect(() => {
    if (!event$) {
      void typeNextLetter();
    }

    return () => {
      clearTimeout(typingTimeout.current!);
    };
  }, []);

  event$?.useSubscription((trigger) => {
    switch (trigger) {
      case TextDeveloperEvent.START: {
        void typeNextLetter();
        break;
      }
      default: {
        break;
      }
    }
  });

  return (
    <Highlighter
      className={cn(
        'font-monospaceNeon [&>pre]:rounded [&>pre]:!bg-transparent [&>pre]:px-1.5 [&>pre]:transition-colors hover:[&>pre]:!bg-black/20',
        inAnimation && '[&>pre]:!bg-black/20',
        className,
      )}
      style={style}
      content={displayedText}
      language="html"
      as="h2"
    />
  );
};
