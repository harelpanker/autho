import { FC } from 'react';
import Image from 'next/image';

import mainImage from '../../public/images/main-desktop.svg';

type MainImageProps = {};

const MainImage: FC<MainImageProps> = ({}) => {
  return (
    <div className='flex justify-center items-center mt-32 w-full'>
      <Image src={mainImage} alt='' />
    </div>
  );
};

export default MainImage;
