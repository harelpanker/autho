import { FC } from 'react';
import Hero from '../Hero';
import BackgroundCoverDesktop from '../BackgroundCoverDesktop';

import MainImage from './MainImage';
import LogosList from '../logos/LogosList';

type WrapperLeftProps = {};

const WrapperLeft: FC<WrapperLeftProps> = ({}) => {
  return (
    <section className='col-span-7 relative z-10 px-5 pt-32 pb-8'>
      <div className='flex flex-col relative z-20 h-full justify-between'>
        <div>
          <Hero />
          <MainImage />
        </div>
        <LogosList />
      </div>
      <BackgroundCoverDesktop />
    </section>
  );
};

export default WrapperLeft;
