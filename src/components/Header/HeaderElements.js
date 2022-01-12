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
  z-index: 5;
  position: fixed;
  top: 7.5rem;

  @media screen and (min-width: 640px) {
    width: auto;
    right: -17rem;
    top: 15rem;
  }
`;
