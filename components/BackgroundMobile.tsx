import { FC } from 'react';
import Image from 'next/image';

import bg_mobile from '../public/images/background-mobile.svg';

type BackgroundProps = {};

const BackgroundMobile: FC<BackgroundProps> = ({}) => {
  return (
    <Image
      priority
      src={bg_mobile}
      alt=''
      className='absolute xl:hidden inset-0 w-full h-full object-cover z-10'
    />
  );
};

export default BackgroundMobile;
