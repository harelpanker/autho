import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' dir='ltr'>
      <Head />
      <body className='antialiased text-theme-black bg-theme-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
