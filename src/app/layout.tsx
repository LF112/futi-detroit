import React from 'react';

import 'normalize.css';
import '@/styles/index.scss';

import { LagRadar } from '@/app/components/devtools/lag-radar/dev';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { interFont } from '@/styles/font';
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
      <body className={cn('futi-ui', interFont.variable)}>
        <ScrollArea className="relative flex h-dvh w-dvw min-w-max">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ScrollArea>
        <LagRadar />
      </body>
    </html>
  );
}