import React from 'react';

type IHeaderRibbonProps = React.ComponentPropsWithoutRef<'div'>;

export const HeaderRibbon: React.FC<IHeaderRibbonProps> = () => (
  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#37eff9] via-[#0091e4] to-[#64c6f4] shadow-sm" />
);
