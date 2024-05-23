'use client';
import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { FutiClipPath } from '@/app/assets/svg/futi';
import { FragShader } from '@/app/components/ui/frag-shader';
import { fuit_uniforms, random_fade_in_shader } from '@/app/components/ui/frag-shader/consts';

type IProfileWrapperProps = React.ComponentPropsWithoutRef<'div'>;

export const ProfileWrapper: React.FC<IProfileWrapperProps> = () => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  return (
    <div className="relative p-0.5">
      <div className="line-width-smooth absolute inset-x-0 -top-px left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-border dark:opacity-40" />
      <div className="line-width-smooth absolute inset-x-0 -bottom-px left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-border dark:opacity-40" />
      <div className="line-height-smooth absolute inset-y-0 -right-px top-1/2 h-0 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gray-400 to-transparent dark:via-border dark:opacity-40" />
      <div className="line-height-smooth absolute inset-y-0 -left-px top-1/2 h-0 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gray-400 to-transparent dark:via-border dark:opacity-40" />
      <motion.div className="overflow-hidden">
        <AnimatePresence>
          {isBackgroundVisible && (
            <motion.div key="futi-frame" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
              <div className="absolute -left-px -top-px z-10 h-3.5 w-3.5 rotate-0 border-l border-t border-gray-500 dark:border-gray-100" />
              <div className="absolute -right-px -top-px z-10 h-3.5 w-3.5 rotate-90 border-l border-t border-gray-500 dark:border-gray-100" />
              <div className="absolute -bottom-px -left-px z-10 h-3.5 w-3.5 -rotate-90 border-l border-t border-gray-500 dark:border-gray-100" />
              <div className="absolute -bottom-px -right-px z-10 h-3.5 w-3.5 rotate-180 border-l border-t border-gray-500 dark:border-gray-100" />
            </motion.div>
          )}
          <motion.div
            key="futi-background"
            className="relative flex h-[25rem] w-[43.75rem] items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
            onAnimationStart={() => setTimeout(() => setIsBackgroundVisible(true), 400)}
          >
            <div className="absolute -mb-2 -mr-6 h-32 w-80" style={{ clipPath: 'url(#futi-icon-clip)' }}>
              {isBackgroundVisible && <FragShader source={random_fade_in_shader} uniforms={fuit_uniforms} />}
            </div>
            <FragShader className="opacity-30 dark:opacity-20" uniforms={fuit_uniforms} />
            <FutiClipPath />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
