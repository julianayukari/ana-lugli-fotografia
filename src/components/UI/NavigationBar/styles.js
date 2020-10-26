import styled from "styled-components";

export const Container = styled.nav`
  background-color: black;
  opacity: 0.4;
  width: 100vw;
  display: flex;
  flex-direction: row;
  list-style:none;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px 0 100px;
`;

export const NavLink = styled.a`
  color: white;
  text-transform: uppercase;
  cursor: pointer
`;


export const NavItem = styled.li`
  padding: 20px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center
`