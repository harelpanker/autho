import { FC } from 'react';
import Link from 'next/link';

type LoginButtomLinkProps = {};

const LoginButtomLink: FC<LoginButtomLinkProps> = ({}) => {
  return (
    <p className='font-semibold'>
      Have an account?{' '}
      <Link href='/signin' className='text-theme-purple'>
        Sign in
      </Link>
    </p>
  );
};

export default LoginButtomLink;
