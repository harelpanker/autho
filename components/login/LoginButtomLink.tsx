import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type LoginButtomLinkProps = {};

const LoginButtomLink: FC<LoginButtomLinkProps> = (props) => {
  const router = useRouter();

  return (
    <p className='font-semibold'>
      {router.asPath === '/signup'
        ? 'Have an account?'
        : "Don't have an account?"}{' '}
      <Link
        href={router.asPath === '/signup' ? '/signin' : '/signup'}
        className='text-theme-purple'>
        {router.asPath === '/signup' ? 'Sign in' : 'Sign up'}
      </Link>
    </p>
  );
};

export default LoginButtomLink;
