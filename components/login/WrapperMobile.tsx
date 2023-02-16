import { FC } from 'react';
import Header from './Header';
import LoginButtomLink from './LoginButtomLink';
import LoginButtons from './LoginButtons';

type WrapperMobileProps = {};

const WrapperMobile: FC<WrapperMobileProps> = ({}) => {
  return (
    <section className='bg-theme-white w-full max-w-sm mx-auto rounded-lg px-4 py-16 flex flex-col gap-9 items-center xl:hidden my-9'>
      <Header />
      <LoginButtons />
      <LoginButtomLink />
    </section>
  );
};

export default WrapperMobile;
