import React from 'react';
import { NavBarContainer } from '../../styles/NavBar.style.js';
import { Logo2 } from '../../styles/Logo.style.js';
import { Logo } from '../../styles/Logo.style.js';
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import { Personajes } from '../../styles/Logo.style.js';

export default function Header() {

  return (
    <div>
        <NavBarContainer>
            <img src={logo} style={{"width" : "10%"}}/>
            <Logo2>HOME</Logo2>
            <Personajes><img src={arrow}/>PERSONAJES</Personajes>
            <Logo2>Notificaciones</Logo2>
            <Logo2>Config</Logo2>
        </NavBarContainer>
    </div>
  )
}
