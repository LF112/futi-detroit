import Image from 'next/image';

import profileImage from '@/app/assets/webp/futiwolf.webp';
import { ProfileWrapper } from '@/app/components/main-layout/profile/wrapper';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <ProfileWrapper>
        <Image src={profileImage} alt="futiwolf,LF112" className="size-64" priority />
      </ProfileWrapper>
    </div>
  );
}
