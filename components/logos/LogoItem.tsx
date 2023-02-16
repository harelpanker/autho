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
    <li>
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
