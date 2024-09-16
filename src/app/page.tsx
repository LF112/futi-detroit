import Image from 'next/image';

import profileImage from '@/app/assets/webp/futiwolf.webp';
import { Description } from '@/app/components/main-layout/profile/introduction/description';
import { Links } from '@/app/components/main-layout/profile/introduction/links';
import { Name } from '@/app/components/main-layout/profile/introduction/name';
import { ProfileWrapper } from '@/app/components/main-layout/profile/wrapper';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
      <ProfileWrapper>
        <Image src={profileImage} alt="futiwolf,LF112" className="size-64" priority />
      </ProfileWrapper>
      <Name />
      <Description />
      <Links />
    </div>
  );
}
