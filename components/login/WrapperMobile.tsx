import { FC } from 'react';
import Header from './Header';
import LoginButtomLink from './LoginButtomLink';
import LoginButtons from './LoginButtons';

type WrapperMobileProps = { showText?: boolean };

const WrapperMobile: FC<WrapperMobileProps> = (props) => {
  const { showText = true } = props;
  return (
    <section className='bg-theme-white w-full max-w-sm mx-auto rounded-lg px-4 py-16 flex flex-col gap-9 items-center xl:hidden my-9'>
      <Header showText={showText} />
      <LoginButtons />
      <LoginButtomLink />
    </section>
  );
};

export default WrapperMobile;
