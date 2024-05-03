import { env } from '@/env';

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      Hi there! 👋
      {env.NEXT_PUBLIC_COMMIT_HASH && <span className="text-xs">{`version commit: ${env.NEXT_PUBLIC_COMMIT_HASH}`}</span>}
    </div>
  );
}
