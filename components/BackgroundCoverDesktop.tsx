import { FC } from 'react';
import Image from 'next/image';

import bg_desktop from '../public/images/bg_desktop.svg';

type BackgroundProps = {};

const BackgroundCoverDesktop: FC<BackgroundProps> = ({}) => {
  return (
    <>
      <Image
        className='absolute hidden xl:block z-10 inset-0 w-full h-full object-cover'
        src={bg_desktop}
        alt=''
        priority
      />
    </>
  );
};

export default BackgroundCoverDesktop;
