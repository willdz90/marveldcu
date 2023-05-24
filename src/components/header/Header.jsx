import React from 'react';
import './Header.css';
import { Logo2 } from '../../styles/Logo.style.js';
import { Logo } from '../../styles/Logo.style.js';
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import notificacion from '../../assets/notificacion.png';
import config from '../../assets/config.png';
import { NavBarContainer, 
  LeftContainerbar, 
  RightContainerbar, 
  LogoMarvel, 
  Home,
  HomeText,
  Personajes,
  ChangeColor,
  TextPersonajes,
  StyledLink, StyledLinkCharacters, 
  NotificationIcon, ConfigIcon

} from '../../styles/NavBar.style.js';

export default function Header() {

  return (
    <div>
        <NavBarContainer>
          <LeftContainerbar>
            <LogoMarvel src={logo}/>
            <Home>
              <StyledLink to='/'>HOME</StyledLink>
            </Home>
            <Personajes>
              <StyledLinkCharacters to="/characters">PERSONAJES</StyledLinkCharacters>
            </Personajes>
          </LeftContainerbar>
          <RightContainerbar>
            <NotificationIcon src={notificacion}/> 
            <ConfigIcon src={config}/> 
          </RightContainerbar>
        </NavBarContainer>
    </div>
  )
}
