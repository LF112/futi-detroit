import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const GeometosFont = localFont({ src: '../../app/assets/font/Geometos.woff', variable: '--font-geometos' });
