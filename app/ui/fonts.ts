import { Lusitana, Montserrat, Mulish } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '700'],
});
