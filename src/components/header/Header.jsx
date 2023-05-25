import React from 'react';
import './Header.css';
import logo from "../../assets/logo.png";
import notificacion from '../../assets/notificacion.png';
import config from '../../assets/config.png';
import { NavBarContainer, 
  LeftContainerbar, 
  RightContainerbar, 
  LogoMarvel, 
  Home,
  Personajes,
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
              <StyledLinkCharacters to="/characters">CHARACTERS</StyledLinkCharacters>
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
