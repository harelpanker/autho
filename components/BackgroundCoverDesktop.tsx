import { FC } from 'react';
import Image from 'next/image';

import bg_desktop from '../public/images/bg_desktop.png';

type BackgroundProps = {};

const BackgroundCoverDesktop: FC<BackgroundProps> = ({}) => {
  return (
    <>
      <Image
        className='absolute hidden xl:block z-10 inset-0 w-full h-full object-cover'
        src={bg_desktop}
        placeholder='blur'
        blurDataURL={`/_next/image?url=${bg_desktop}&w=16&q=1`}
        alt=''
        priority
      />
    </>
  );
};

export default BackgroundCoverDesktop;
