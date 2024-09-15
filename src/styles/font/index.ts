import { Inter, Russo_One } from 'next/font/google';
import localFont from 'next/font/local';

export const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const russoOneFont = Russo_One({
  weight: '400',
  variable: '--font-russo-one',
});

export const GeometosFont = localFont({ src: '../../app/assets/font/Geometos.woff', variable: '--font-geometos' });
