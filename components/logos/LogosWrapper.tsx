import { FC } from 'react';
import Image from 'next/image';

import mainMobile from '../../public/images/main-mobile.png';
import LogosList from './LogosList';

type LogosWrapperProps = {};

const LogosWrapper: FC<LogosWrapperProps> = ({}) => {
  return (
    <section className='flex flex-col gap-20 items-center xl:hidden'>
      <Image
        src={mainMobile}
        alt=''
        quality={100}
        priority
        className='xl:hidden'
      />
      <LogosList />
    </section>
  );
};

export default LogosWrapper;
