'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';

import { useEventEmitter } from 'ahooks';
import { AnimatePresence, motion } from 'framer-motion';

import profileImage from '@/app/assets/webp/futiwolf.webp';
import { Description } from '@/app/components/main-layout/profile/introduction/description';
import { Links } from '@/app/components/main-layout/profile/introduction/links';
import { Name } from '@/app/components/main-layout/profile/introduction/name';
import { ProfileWrapper } from '@/app/components/main-layout/profile/wrapper';
import { Live2D, Live2DEvent } from '@/app/components/ui/live2d';

export default function Home() {
  const [live2dVisible, setLive2dVisible] = useState(false);
  const [profileImageVisible, setProfileImageVisible] = useState(true);

  const live2dEvent$ = useEventEmitter<Live2DEvent>();
  live2dEvent$.useSubscription((target) => {
    switch (target) {
      case Live2DEvent.SHOW: {
        setProfileImageVisible(false);
        break;
      }
    }
  });

  useEffect(() => {
    if (!live2dVisible) {
      setTimeout(() => setLive2dVisible(true), 1500);
    }
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
      <ProfileWrapper className="relative size-64">
        <AnimatePresence>
          {profileImageVisible && (
            <motion.div
              key="futi-profile-image"
              className="absolute left-0 top-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image src={profileImage} alt="futiwolf,LF112" className="size-64" priority />
            </motion.div>
          )}
        </AnimatePresence>
        {live2dVisible && <Live2D event$={live2dEvent$} />}
      </ProfileWrapper>
      <Name />
      <Description />
      <Links />
    </div>
  );
}
