import { FC } from 'react';

type TypographyH1Props = {
  text: string;
  isCenter?: boolean;
};

const TypographyH1: FC<TypographyH1Props> = (props) => {
  const { text, isCenter = false } = props;
  return (
    <h1
      className={`${
        isCenter ? 'text-center' : 'text-left'
      } text-4xl font-bold`}>
      {text}
    </h1>
  );
};

export default TypographyH1;
