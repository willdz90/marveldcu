import styled, { keyframes } from "styled-components";
import { NavLink } from 'react-router-dom';

export const rotate = keyframes`

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const latido = keyframes`
    0% { border: 2px solid gray; }
    100% { border: 2px solid transparent; }
`


export const NotificationIcon = styled.img`
    margin: 0 12px;
    width: 18%;
    cursor: pointer;
    border-radius: 50%;
    padding: 7px;
    border: 2px solid transparent;

    &:hover {
        animation: ${latido} 1s linear infinite
    }
`;

export const ConfigIcon = styled.img`
    margin: 0 12px;
    width: 18%;
    cursor: pointer;
    border: 2px solid transparent;
    padding: 7px;
    &:hover {
        animation: ${rotate} 3s linear infinite;
    }
`;

export const NavBarContainer = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #3C3C41;
`;

export const LeftContainerbar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

export const RightContainerbar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

export const LogoMarvel = styled.img`
    width: 30%;
`;

export const Home = styled.div`
    display: flex;
    letter-spacing: 2px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 24%;
    color: white;
    height: 100%;
    cursor: pointer;
`;

export const HomeText = styled.span`
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 2px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`;

export const Personajes = styled.div`
    text-align: center;
    width: 26%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextPersonajes = styled.span`
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 2px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    ${Personajes}:hover & {
        color: #C89B3C;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        /* background: linear-gradient(180deg, #231F20 0%, rgba(34, 34, 34, 0) 100%); */
    }
`;

export const changeColor = styled.div`

`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    letter-spacing: 2px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 14px;
    color: white;
    height: 100%;
    cursor: pointer;
    color: white;
    /* &:focus, &:hover, &:visited, &:link {
        text-decoration: none;
    } */

    ${Home}:hover & {
        color: #C89B3C;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        /* background: linear-gradient(180deg, #231F20 0%, rgba(34, 34, 34, 0) 100%); */
    }
`;

export const StyledLinkCharacters = styled(NavLink)`
    text-decoration: none;
    font-size: 13px;
    display: flex;
    letter-spacing: 2px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: white;
    height: 100%;
    cursor: pointer;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    ${Personajes}:hover & {
        color: #C89B3C;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        /* background: linear-gradient(180deg, #231F20 0%, rgba(34, 34, 34, 0) 100%); */
    }
`;