import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import Parallax from 'parallax-js';

import backgroundLeftImage from '@/app/assets/webp/background_left.webp';
import backgroundRightImage from '@/app/assets/webp/background_right.webp';
import { BasicsProps } from '@/app/components/ui/types';

type IDetroitBackgroundProps = BasicsProps;

export const DetroitBackground: React.FC<IDetroitBackgroundProps> = () => {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (node.current) {
      const parallax = new Parallax(node.current);

      return () => {
        parallax.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={node}
      className="absolute left-0 top-0 z-[-1] size-full after:absolute after:left-0 after:top-0 after:size-full after:backdrop-blur"
    >
      <Image
        src={backgroundLeftImage}
        alt="ga_background_left"
        className="absolute !-left-20 !-top-8 h-[calc(100vh+4rem)] w-[35vw]"
        data-depth="0.2"
      />
      <Image
        src={backgroundRightImage}
        alt="ga_background_left"
        className="absolute !-top-[2rem] !left-[26vw] h-[calc(100vh+5rem)] w-[80vw]"
        data-depth="0.3"
      />
    </div>
  );
};
