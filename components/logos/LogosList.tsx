import { FC } from 'react';
import LogoItem from './LogoItem';
import uuid from 'react-uuid';

import logoM1 from '../../public/images/logos-mobile/1.png';
import logoM2 from '../../public/images/logos-mobile/2.png';
import logoM3 from '../../public/images/logos-mobile/3.png';
import logoM4 from '../../public/images/logos-mobile/4.png';
import logoM5 from '../../public/images/logos-mobile/5.png';
import logoM6 from '../../public/images/logos-mobile/6.png';

import logoD1 from '../../public/images/logos-desktop/1.png';
import logoD2 from '../../public/images/logos-desktop/2.png';
import logoD3 from '../../public/images/logos-desktop/3.png';
import logoD4 from '../../public/images/logos-desktop/4.png';
import logoD5 from '../../public/images/logos-desktop/5.png';
import logoD6 from '../../public/images/logos-desktop/6.png';
import logoD7 from '../../public/images/logos-desktop/7.png';

const mobileList = [
  { src: logoM1, width: 116, height: 17 },
  { src: logoM2, width: 85, height: 46 },
  { src: logoM3, width: 134, height: 32 },
  { src: logoM4, width: 169, height: 20 },
  { src: logoM5, width: 146, height: 31 },
  { src: logoM6, width: 142, height: 39 },
];
const desktopList = [
  { src: logoD1, width: 271, height: 38 },
  { src: logoD2, width: 197, height: 106 },
  { src: logoD3, width: 314, height: 72 },
  { src: logoD4, width: 394, height: 44 },
  { src: logoD5, width: 341, height: 70 },
  { src: logoD6, width: 332, height: 88 },
  { src: logoD7, width: 326, height: 68 },
];

type LogosListProps = {};

const LogosList: FC<LogosListProps> = ({}) => {
  return (
    <>
      <ul className='w-full max-w-[340px] flex flex-wrap items-center justify-center gap-8 xl:hidden'>
        {mobileList.map((logo) => (
          <LogoItem
            key={uuid()}
            src={logo.src.src}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </ul>
      <ul className='w-full max-w-[800px] xl:flex items-center justify-center mx-auto flex-wrap gap-9 hidden'>
        {desktopList.map((logo) => (
          <LogoItem
            key={uuid()}
            src={logo.src.src}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </ul>
    </>
  );
};

export default LogosList;
