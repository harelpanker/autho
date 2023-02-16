import { FC } from 'react';
import Hero from '@/components/Hero';
import Background from '@/components/BackgroundMobile';
import WrapperMobile from '@/components/login/WrapperMobile';
import LogosWrapper from '@/components/logos/LogosWrapper';

type signupProps = {};

const signup: FC<signupProps> = ({}) => {
  return (
    <main className='xl:flex-row flex relative flex-col gap-9 min-h-screen pt-9 pb-6 px-5'>
      <div className='relative z-20'>
        <div className='xl:hidden'>
          <Hero />
        </div>
        {/* signup - (mobile) */}
        <WrapperMobile />
        {/* image - logos (mobile) */}
        <LogosWrapper />
      </div>
      <Background />
    </main>
  );
};

export default signup;
