import * as React from 'react';

interface Props {
  title: string;
  btnText: string;
  btnUrl: string;
  btnColor: number;
}

const Hero = ({ title, btnText, btnUrl, btnColor }: Props) => {

  return (
    <h2>Hero Component</h2>
  );
}

export default Hero;