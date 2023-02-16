import { FC } from 'react';

type TypographyH1Props = {
  text: string;
  isCenter?: boolean;
};

const TypographyH1: FC<TypographyH1Props> = (props) => {
  const { text, isCenter = false } = props;
  return (
    <h2
      className={`${
        isCenter ? 'text-center' : 'text-left'
      } text-[22px] font-bold`}>
      {text}
    </h2>
  );
};

export default TypographyH1;
