import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 27rem;
  overflow: hidden;
  position: relative;
`;

export const HeaderBackDrop = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  border-bottom-left-radius: 60px;
  background-color: hsl(207, 33%, 95%);
  z-index: 1;
`;

export const HeaderImg = styled.img`
  width: 140%;
  z-index: 10;
  position: absolute;
  top: 7.5rem;
`;
