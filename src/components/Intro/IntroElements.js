import styled from "styled-components";

export const IntroContainer = styled.section`
  width: 100%;
  padding: 2rem;
`;

export const TextWrap = styled.div``;

export const Subtitle = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: hsl(231, 7%, 65%);
  letter-spacing: 3px;
  font-family: "Barlow Condensed", sans-serif;
`;

export const Span = styled.span`
  background-color: hsl(230, 29%, 20%);
  letter-spacing: 1px;
  color: #fff;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 13px;
  margin-right: 0.5rem;
`;

export const Title = styled.h1`
  font-family: "Barlow Condensed", sans-serif;
  text-transform: uppercase;
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 1rem;
  color: hsl(230, 29%, 20%);
`;

export const Description = styled.p`
  color: hsl(230, 11%, 40%);
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const IntroButton = styled.button`
  border: none;
  background-color: hsl(0, 100%, 68%);
  color: #fff;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.6rem 1.5rem;

  border-radius: 5px;
  margin-right: 1rem;
`;

export const ButtonLabel = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  color: hsl(231, 7%, 65%);
`;
