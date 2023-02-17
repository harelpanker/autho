import { FC } from 'react';
import Image from 'next/image';

import TypographyH1 from '../ui/TypographyH2';

import logo from '../../public/images/logo-dark.svg';
import mainImageDesktop from '../../public/images/main-desktop.svg';

type HeaderProps = { showText?: boolean };

const Header: FC<HeaderProps> = (props) => {
  const { showText = true } = props;
  return (
    <header className='w-full text-center flex flex-col gap2 items-center xl:gap-11'>
      <Image src={logo} alt='' className='hidden xl:block' />
      <TypographyH1 text='Sign in to your account' />
      {showText ? (
        <p className='text-[#A1A09A] font-semibold'>
          No credit card required,
          <br />5 minutes to set up
        </p>
      ) : null}
      <Image src={mainImageDesktop} alt='' className='hidden xl:mt-32' />
    </header>
  );
};

export default Header;
