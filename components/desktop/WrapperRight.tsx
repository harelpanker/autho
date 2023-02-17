import { FC } from 'react';
import Header from '../login/Header';
import LoginButtomLink from '../login/LoginButtomLink';
import LoginButtons from '../login/LoginButtons';

type WrapperRightProps = { showText?: boolean };

const WrapperRight: FC<WrapperRightProps> = (props) => {
  const { showText = true } = props;
  return (
    <section className='col-span-5 flex flex-col justify-center items-center gap-24'>
      <Header showText={showText} />
      <LoginButtons />
      <LoginButtomLink />
    </section>
  );
};

export default WrapperRight;
