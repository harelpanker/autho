import { FC } from 'react';
import TypographyH1 from './ui/TypographyH1';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='flex flex-col gap-2 text-theme-white'>
      <TypographyH1 text='Permit.io' isCenter={true} />
      <p className='hidden xl:block text-center font-semibold text-2xl'>
        Plug and play permission management
      </p>
    </header>
  );
};

export default Hero;
