import { env } from '@/env'

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center text-center">
      <h1 className="text-xl">Hi there! 👋</h1>
      <h2 className="my-5">I'm LF112, A NodeJS Fullstack Developer</h2>
      <span className="mb-2 text-xs">
        The website is currently under construction,
        <br />
        looking forward to seeing you again soon!
      </span>
      {env?.NEXT_PUBLIC_COMMIT_HASH && (
        <span className="text-xs">{`version commit: ${env.NEXT_PUBLIC_COMMIT_HASH}`}</span>
      )}
    </div>
  )
}
