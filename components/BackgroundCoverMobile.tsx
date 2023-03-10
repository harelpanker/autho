import { FC } from 'react';
import Image from 'next/image';

import bg_mobile from '../public/images/bg_mobile.png';

type BackgroundProps = {};

const BackgroundCoverMobile: FC<BackgroundProps> = ({}) => {
  return (
    <>
      <Image
        priority
        placeholder='blur'
        blurDataURL={`/_next/image?url=${bg_mobile}&w=16&q=1`}
        src={bg_mobile}
        alt=''
        className='absolute xl:hidden inset-0 w-full h-full object-cover z-10'
      />
    </>
  );
};

export default BackgroundCoverMobile;
