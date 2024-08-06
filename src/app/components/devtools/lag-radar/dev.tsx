'use client';

import dynamic from 'next/dynamic';

import type React from 'react';

import type { ILagRadarProps } from '@/app/components/devtools/lag-radar';
import { env } from '@/env';

export const LagRadar: (() => null) | React.ComponentType<ILagRadarProps> =
  env.NEXT_PUBLIC_NODE_ENV === 'production'
    ? () => null
    : dynamic(() => import('@/app/components/devtools/lag-radar/index'), {
        loading: () => null,
        ssr: false,
      });
