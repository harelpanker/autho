import { FC } from 'react';
import Hero from '@/components/Hero';
import BackgroundCoverMobile from '@/components/BackgroundCoverMobile';
import WrapperMobile from '@/components/login/WrapperMobile';
import LogosWrapper from '@/components/logos/LogosWrapper';
import WrapperLeft from '@/components/desktop/WrapperLeft';
import WrapperRight from '@/components/desktop/WrapperRight';

type signupProps = {};

const signin: FC<signupProps> = ({}) => {
  return (
    <main className='flex relative flex-col gap-9 min-h-screen pt-9 pb-6 px-5 xl:p-0'>
      <div className='relative z-20'>
        <div className='xl:hidden'>
          <Hero />
        </div>
        {/* signup - (mobile) */}
        <WrapperMobile showText={false} />
        {/* image - logos (mobile) */}
        <LogosWrapper />
        {/* Left side (desktop) */}
        <div className='hidden xl:grid xl:grid-cols-12 min-h-screen'>
          <WrapperLeft />
          <WrapperRight showText={false} />
        </div>
      </div>
      <BackgroundCoverMobile />
    </main>
  );
};

export default signin;
