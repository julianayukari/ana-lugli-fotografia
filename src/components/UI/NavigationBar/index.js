import React from 'react';
import { Container, NavLink, NavItem, Links } from "./styles";
import {ReactComponent as Logo} from '../../../assets/logo.svg';
import {ReactComponent as InstagramLogo} from '../../../assets/instagram.svg';

export default function NavigationBar() {

  const navButtons = [
    {
      id: 0,
      title: 'Início',
      route: 'banner'
    },
    {
      id: 1,
      title: 'Projeto em destaque',
      route: 'detach'
    },
    {
      id: 2,
      title: 'Portfólio',
      route: 'portfolio'
    },
    {
      id: 3,
      title: 'Quem sou',
      route: 'about'
    },
    {
      id: 4,
      title: 'Contact',
      route: 'banner'
    },
  ]

  return (
    <Container>
      <Logo height={38} />
      <Links>
      {navButtons.map(item => (
        <NavItem>
         <NavLink>{item.title}</NavLink>
        </NavItem>
      )
      )}
      <InstagramLogo height={18} />
      </Links>
  </Container>
  )
}
