import { FC } from 'react';

import google from '../../public/images/google.png';
import github from '../../public/images/github.png';
import LoginButton from './LoginButton';

type LoginButtonsProps = {};

const buttonsData = [
  { id: 1, src: github, alt: 'GitHub', text: 'Continue with GitHub' },
  { id: 2, src: google, alt: 'Google', text: 'Continue with Google' },
];

const LoginButtons: FC<LoginButtonsProps> = ({}) => {
  return (
    <ul className='flex flex-col gap-4 w-full max-w-[256px]'>
      {buttonsData.map((button) => (
        <LoginButton
          key={button.id}
          src={button.src.src}
          alt={button.alt}
          text={button.text}
        />
      ))}
    </ul>
  );
};

export default LoginButtons;
