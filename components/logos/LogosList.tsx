import { FC } from 'react';
import uuid from 'react-uuid';

import logo1 from '../../public/images/logos-mobile/1.png';
import logo2 from '../../public/images/logos-mobile/2.png';
import logo3 from '../../public/images/logos-mobile/3.png';
import logo4 from '../../public/images/logos-mobile/4.png';
import logo5 from '../../public/images/logos-mobile/5.png';
import logo6 from '../../public/images/logos-mobile/6.png';
import LogoItem from './LogoItem';

const mobileList = [
  { src: logo1, width: 116, height: 17 },
  { src: logo2, width: 85, height: 46 },
  { src: logo3, width: 134, height: 32 },
  { src: logo4, width: 169, height: 20 },
  { src: logo5, width: 146, height: 31 },
  { src: logo6, width: 142, height: 39 },
];

type LogosListProps = {};

const LogosList: FC<LogosListProps> = ({}) => {
  return (
    <ul className='w-full max-w-[340px] flex flex-wrap items-center justify-center gap-8'>
      {mobileList.map((logo) => (
        <LogoItem
          key={uuid()}
          src={logo.src.src}
          width={logo.width}
          height={logo.height}
        />
      ))}
    </ul>
  );
};

export default LogosList;
