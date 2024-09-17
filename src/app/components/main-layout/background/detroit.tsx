import React, { useRef, useState } from 'react';

import Image from 'next/image';

import { useDebounceEffect } from 'ahooks';
import { motion } from 'framer-motion';
import Parallax from 'parallax-js';

import backgroundLeftImage from '@/app/assets/webp/background_left.webp';
import backgroundRightImage from '@/app/assets/webp/background_right.webp';
import { BasicsProps } from '@/app/components/ui/types';

type IDetroitBackgroundProps = BasicsProps;

export const DetroitBackground: React.FC<IDetroitBackgroundProps> = () => {
  const node = useRef<HTMLDivElement>(null);

  const [isLeftLoaded, setIsLeftLoaded] = useState(false);
  const [isRightLoaded, setIsRightLoaded] = useState(false);
  useDebounceEffect(
    () => {
      if (isLeftLoaded && isRightLoaded && node.current) {
        const parallax = new Parallax(node.current);

        return () => {
          parallax.destroy();
        };
      }
    },
    [isLeftLoaded, isRightLoaded],
    { wait: 100 },
  );

  return (
    <motion.div
      ref={node}
      className="absolute left-0 top-0 z-[-1] size-full after:absolute after:left-0 after:top-0 after:size-full after:backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLeftLoaded && isRightLoaded ? 1 : 0, transition: { delay: 0.2 } }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={backgroundLeftImage}
        alt="ga_background_left"
        className="absolute !-left-20 !-top-8 h-[calc(100vh+4rem)] w-[35vw] max-sm:!-left-10 max-sm:object-cover max-sm:object-right"
        data-depth="0.2"
        onLoad={() => setIsLeftLoaded(true)}
      />
      <Image
        src={backgroundRightImage}
        alt="ga_background_left"
        className="absolute !-top-[2rem] !left-[26vw] h-[calc(100vh+5rem)] w-[80vw] max-sm:!left-[20vw] max-sm:object-cover max-sm:object-left"
        data-depth="0.3"
        onLoad={() => setIsRightLoaded(true)}
      />
    </motion.div>
  );
};
