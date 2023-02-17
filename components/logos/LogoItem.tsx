import { FC } from 'react';
import Image from 'next/image';

type LogoItemProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

const LogoItem: FC<LogoItemProps> = (props) => {
  const { src, alt = '', width, height } = props;
  return (
    <li className='xl:max-w-[21%] xl:flex xl:justify-center xl:items-center'>
      <Image
        quality={100}
        priority
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </li>
  );
};

export default LogoItem;
