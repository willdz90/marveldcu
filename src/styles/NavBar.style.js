import styled from "styled-components";

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

    ${Home}:hover & {
        color: #C89B3C;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: linear-gradient(180deg, #231F20 0%, rgba(34, 34, 34, 0) 100%);
    }
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
        background: linear-gradient(180deg, #231F20 0%, rgba(34, 34, 34, 0) 100%);
    }
`;

export const changeColor = styled.div`

`;