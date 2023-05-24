import React from 'react';
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
  
} from '../../styles/NavBar.style.js';

export default function Header() {

  return (
    <div>
        <NavBarContainer>
          <LeftContainerbar>
            <LogoMarvel src={logo}/>
            <Home>
              <StyledLink to='/Home'>HOME</StyledLink>
            </Home>
            <Personajes>
              <StyledLinkCharacters to="/">PERSONAJES</StyledLinkCharacters>
            </Personajes>
          </LeftContainerbar>
          <RightContainerbar>
            <img src={notificacion}/> 
            <img src={config}/> 
          </RightContainerbar>
        </NavBarContainer>
    </div>
  )
}
