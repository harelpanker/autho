import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Manrope } from '@next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${manrope.variable} font-sans antialiased bg-theme-white`}>
      <Component {...pageProps} />
    </div>
  );
}
