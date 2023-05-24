import styled, {keyframes} from "styled-components";
import circulo from '../assets/circuloExt.png';
import fondoCards from '../assets/fondoCards.png';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ImgName = styled.img`
    width: 2vw;
    height: 3vh;
    margin: 0 2px;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    background-image: url(${fondoCards});
    background-repeat: no-repeat;
    background-size: cover;
    width: 17%;
    height: 65vh;
    text-align: center;
    border: 0.75px solid #3C3C41;
    border-radius: 5px;
`;

export const TitleCard = styled.div`
    display: flex;
`;

export const Avatar = styled.img`
    width: 7vw;
    height: 16vh;
    border-radius: 50%;
    border: 0.75px solid #3C3C41;
`;

export const AvatarExt = styled.div`
    cursor: pointer;
    background-image: url(${circulo});
    background-size: contain;
    background-repeat: no-repeat;
    width: 10vw;
    height: 26vh;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    /* animation: ${rotate} 5s linear infinite; */
`;

export const AvatarExt2 = styled.div`
    cursor: pointer;
    background-image: url(${circulo});
    background-size: contain;
    background-repeat: no-repeat;
    width: 12vw;
    height: 26vh;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;

`;

export const AvatarContainer = styled.div`
    border-radius: 50px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 12px;
`;

export const Info = styled.div`
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 8.5px;
    /* Dorado 1 */
    color: #F0E6D2;
`;

// background: #1E2328;
// border-radius: 5px;

export const InfoComics = styled.div`
    border: 1px solid gray;
    display: flex;
    width: 73%;
    height: 12%;
    align-items: center;
    justify-content: space-around;
    margin: 14px;
    background: #1E2328;
    border-radius: 5px;
`;

export const InfoSeries = styled.div`
    border: 1px solid gray;
    display: flex;
    width: 73%;
    height: 12%;
    align-items: center;
    justify-content: space-around;
    background: #1E2328;
    border-radius: 5px;
`;

export const TextDetail = styled.span`
    font-size: 28px;
    margin: 0 22px;
`;