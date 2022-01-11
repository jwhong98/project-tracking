import styled from "styled-components";

export const ToggleContainer = styled.div`
  background-color: #fff;
  font-family: "Barlow Condensed", sans-serif;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  position: fixed;
  top: 6rem;
  z-index: 21;
  padding: 1.5rem;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 1.25rem;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.25);
`;

export const Menu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  border-bottom: 1px solid hsl(231, 7%, 65%);
`;

export const MenuItem = styled.li`
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: hsl(230, 29%, 20%);
`;

export const Login = styled.p`
  color: hsl(231, 7%, 65%);
  font-weight: 700;
  margin-top: 1.5rem;
`;
