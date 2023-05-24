import styled from 'styled-components';
import close from '../assets/close-eyes.png';
import fondo from '../assets/fondoCards.png';

export const ModalDiv = styled.div`
display: ${p => p.block && p.block};
position: fixed;
top: 0;
left:0;
width: 100%;
height:100%;
background: rgba(0,0,0,0.6);
z-index: 1;
`;

export const ContentDiv = styled.div`
    color: gray;
    border: solid 2px gray;
    display: flex;
    position: fixed;
    top: 50%;
    left:50%;
    width: 50%;
    height:auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    background-image: url(${fondo});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const ContentInformation = styled.div`
    display: flex;
    align-items: center;
`;

export const DescriptionDiv = styled.div`
    text-align: justify;
`;

export const PosterImg = styled.img`
    width: 15vw;
    border-radius: 1rem;
`;

export const NameCharacter = styled.span`
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 2px;
`;

export const ImgNameCharacter = styled.img`
    margin: 2vh;
`;

export const LeftDiv = styled.div`
    /* width: 100%; */
`;

export const RightDiv = styled.div`
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InfoAdditional = styled.div`
    color: black;
    letter-spacing: 1px;
    display: flex;
    width: 85%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: solid 1px gray;
    background-color: gray;
    justify-content: space-around;
`;

export const TextInfoC = styled.span`
    font-size: 28px;
`;

export const ArrowLink = styled.img`
    width: 25%;
    margin-left: 4%;
`;

export const LinksCharacter = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
`;

export const CloseButton = styled.button`
    cursor: pointer;
    padding: 3px;
    background-image: url(${close});
    background-size: cover;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 50%;
`;
