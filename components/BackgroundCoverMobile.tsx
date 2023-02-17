import { FC } from 'react';
import Image from 'next/image';

import bg_mobile from '../public/images/bg_mobile.png';

type BackgroundProps = {};

const BackgroundCoverMobile: FC<BackgroundProps> = ({}) => {
  return (
    <>
      <Image
        priority
        src={bg_mobile}
        alt=''
        className='absolute xl:hidden inset-0 w-full h-full object-cover z-10'
      />
    </>
  );
};

export default BackgroundCoverMobile;
