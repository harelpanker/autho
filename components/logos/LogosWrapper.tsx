import { FC } from 'react';
import Image from 'next/image';

import mainMobile from '../../public/images/main-mobile.svg';
import LogosList from './LogosList';

type LogosWrapperProps = {};

const LogosWrapper: FC<LogosWrapperProps> = ({}) => {
  return (
    <section className='flex flex-col gap-20 items-center xl:hidden'>
      <Image
        src={mainMobile}
        quality={100}
        placeholder='blur'
        blurDataURL={`/_next/image?url=${mainMobile}&w=16&q=1`}
        priority
        alt=''
        className='xl:hidden'
      />
      <LogosList />
    </section>
  );
};

export default LogosWrapper;
