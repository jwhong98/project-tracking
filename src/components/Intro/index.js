import React from "react";
import {
  IntroContainer,
  TextWrap,
  Subtitle,
  Span,
  Title,
  Description,
  ButtonWrap,
  IntroButton,
  ButtonLabel,
} from "./IntroElements";

const Intro = () => {
  return (
    <IntroContainer>
      <TextWrap>
        <Subtitle>
          <Span>new</Span> monograph dashboard
        </Subtitle>
        <Title>powerful insights into your team</Title>
        <Description>
          Project planning and time tracking for agile teams
        </Description>
        <ButtonWrap>
          <IntroButton>schedule a demo</IntroButton>
          <ButtonLabel>to see a preview</ButtonLabel>
        </ButtonWrap>
      </TextWrap>
    </IntroContainer>
  );
};

export default Intro;
