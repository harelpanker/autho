import { FC } from 'react';
import Header from '../login/Header';
import LoginButtomLink from '../login/LoginButtomLink';
import LoginButtons from '../login/LoginButtons';

type WrapperRightProps = {};

const WrapperRight: FC<WrapperRightProps> = ({}) => {
  return (
    <section className='col-span-5 flex flex-col justify-center items-center gap-24'>
      <Header showText={false} />
      <LoginButtons />
      <LoginButtomLink />
    </section>
  );
};

export default WrapperRight;
