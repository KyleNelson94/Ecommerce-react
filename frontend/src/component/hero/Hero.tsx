import * as React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  btnText?: string;
  btnUrl?: string;
  btnColor?: number;
}

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  background-color: ${ props => props.theme.primaryColor };
  min-height: 40vh;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroContentContainer = styled.div`
  position: relative;
  display: block;
  width: 50%;
  height: 100%;
  border: 5px solid red;

  @media (max-width: 768px) {

    width: 100%;
  }
`;

const HeroImage = styled.div`
  position: relative;
  display: block;
  width: 50%;
  height: 100%;
  min-height: 40vh;
  background-color: ${ props => props.theme.tertiaryColor };
  
  @media (max-width: 768px) {

    width: 100%;
  }
`;

const Hero = ({ title, btnText, btnUrl, btnColor }: Props) => {

  return (
    <HeroContainer>
      <HeroContentContainer>
        <h1>{ title }</h1>
      </HeroContentContainer>
      <HeroImage />
    </HeroContainer>
  );
}

export default Hero;