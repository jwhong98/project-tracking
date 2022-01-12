import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: transparent;
  position: absolute;
  z-index: 10;

  @media screen and (min-width: 640px) {
    padding: 2rem 7rem;
  }
`;

export const NavWrap = styled.div`
  width: 100%;
`;

export const NavToggle = styled.img`
  cursor: pointer;

  @media screen and (min-width: 640px) {
    display: none;
  }
`;

export const NavLogo = styled.img`
  width: 1.75rem;
`;

export const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 640px) {
    display: flex;
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem;
  margin-right: 4rem;
`;

export const MenuItem = styled.li`
  color: hsl(230, 29%, 20%);
`;

export const Login = styled.span`
  color: hsl(231, 7%, 65%);
`;
