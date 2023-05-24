import React from 'react';
import { Logo2 } from '../../styles/Logo.style.js';
import { Logo } from '../../styles/Logo.style.js';
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import notificacion from '../../assets/notificacion.png'
import config from '../../assets/config.png'
import { NavBarContainer, 
  LeftContainerbar, 
  RightContainerbar, 
  LogoMarvel, 
  Home,
  HomeText,
  Personajes,
  ChangeColor,
  TextPersonajes,
} from '../../styles/NavBar.style.js';

export default function Header() {

  // <img src={arrow}/>

  return (
    <div>
        <NavBarContainer>
          <LeftContainerbar>
            <LogoMarvel src={logo}/>
            <Home>
              <HomeText>HOME</HomeText>
            </Home>
            <Personajes>
              <TextPersonajes>PERSONAJES</TextPersonajes>
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
