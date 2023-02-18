import { FC } from 'react';
import Image from 'next/image';

import mainImage from '../../public/images/main-desktop.svg';

type MainImageProps = {};

const MainImage: FC<MainImageProps> = ({}) => {
  return (
    <div className='flex justify-center items-center mt-32 w-full'>
      <Image
        src={mainImage}
        alt=''
        placeholder='blur'
        blurDataURL={`/_next/image?url=${mainImage}&w=16&q=1`}
      />
    </div>
  );
};

export default MainImage;
