import React from 'react';

import { cn } from '@/utils';

type IBlueprintProps = React.ComponentPropsWithoutRef<'div'>;

export const Blueprint: React.FC<IBlueprintProps> = ({ className, children }) => {
  return (
    <div className={cn('relative p-0.5', className)}>
      <div className="absolute inset-x-0 -top-px left-1/2 h-px w-[200%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent dark:opacity-40" />
      <div className="absolute inset-x-0 -bottom-px left-1/2 h-px w-[200%] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent dark:opacity-40" />
      <div className="absolute inset-y-0 -right-px top-1/2 h-[200%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border to-transparent dark:opacity-40" />
      <div className="absolute inset-y-0 -left-px top-1/2 h-[200%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-border to-transparent dark:opacity-40" />
      {children}
    </div>
  );
};
