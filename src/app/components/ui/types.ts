import React, { CSSProperties, ReactNode } from 'react';

import { JSX } from 'react/jsx-runtime';

export type AsComp =
  | keyof JSX.IntrinsicElements
  | React.ForwardRefExoticComponent<
      React.PropsWithoutRef<{
        style: CSSProperties;
        children: ReactNode;
      }> &
        React.RefAttributes<any>
    >;

export type BasicsProps<
  T extends keyof JSX.IntrinsicElements = 'div',
  K extends keyof React.ComponentPropsWithoutRef<T> = never,
> = Pick<React.ComponentPropsWithoutRef<T>, 'className' | 'style' | K>;
