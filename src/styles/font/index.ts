import { Inter, Kanit, Russo_One, Ubuntu } from 'next/font/google';
import localFont from 'next/font/local';

export const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const russoOneFont = Russo_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-russo-one',
});

export const kanitFont = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-kanit',
});

export const UbuntuFont = Ubuntu({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-ubuntu',
});

export const GeometosFont = localFont({ src: '../../app/assets/font/Geometos.woff', variable: '--font-geometos' });

export const MonaspaceNeonFont = localFont({
  src: '../../app/assets/font/MonaspaceNeon.woff',
  variable: '--font-monaspace-neon',
});
