import { FC } from 'react';
import Image from 'next/image';

type LoginButtonProps = {
  src: string;
  alt: string;
  text: string;
};

const LoginButton: FC<LoginButtonProps> = (props) => {
  const { src, alt, text } = props;
  return (
    <li className='w-full'>
      <button className='rounded-full px-[10px] min-h-[50px] flex gap-3 items-center font-bold w-full text-lg border border-[#DBDBD7]'>
        <Image quality={100} src={src} alt={alt} width={30} height={30} />
        <span>{text}</span>
      </button>
    </li>
  );
};

export default LoginButton;
