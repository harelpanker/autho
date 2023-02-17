import Head from 'next/head';

import Container from '@/components/ui/Container';
import ButtonLink from '@/components/ui/ButtonLink';
import TypographyH1 from '@/components/ui/TypographyH1';

export default function Home() {
  return (
    <>
      <Head>
        <title>Permit Auth0</title>
        <meta name='description' content='Permit Auth0' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`min-h-screen px-5 py-20 flex flex-col justify-center relative`}>
        <Container>
          <div className='flex flex-col items-center space-y-8'>
            <h1 className='text-5xl font-bold'>Permit - Auth0</h1>
            <ul className='flex gap-4'>
              <li>
                <ButtonLink href='/signup' text='Signup' />
              </li>
              <li>
                <ButtonLink href='/signin' text='Signin' />
              </li>
            </ul>
          </div>
        </Container>
      </main>
    </>
  );
}
