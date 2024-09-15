/* eslint-disable react-refresh/only-export-components */
import React from 'react';

import 'normalize.css';
import '@/styles/index.scss';

import { CommitPage } from '@/app/components/devtools/commit';
import { LagRadar } from '@/app/components/devtools/lag-radar/dev';
import { Header } from '@/app/components/main-layout/header';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { GeometosFont, interFont } from '@/styles/font';
import { TRPCReactProvider } from '@/trpc/react';
import { cn } from '@/utils';

export const metadata = {
  title: 'LF112「@futiwolf」',
  description: "futiowlf's personal website, A NodeJS Fullstack Developer. | Front-end Developer / Blogger",
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <CommitPage />
      </head>
      <body className={cn('futi-ui', interFont.variable, GeometosFont.variable)}>
        <ScrollArea className="relative h-dvh w-dvw min-w-max [&>[data-radix-scroll-area-viewport]>div]:!flex [&>[data-radix-scroll-area-viewport]>div]:h-full [&>[data-radix-scroll-area-viewport]>div]:flex-col">
          <Header />
          <main className="flex flex-1 flex-col">
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </main>
        </ScrollArea>
        <LagRadar />
      </body>
    </html>
  );
}
