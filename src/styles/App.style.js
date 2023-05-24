import styled from "styled-components";
import FondoLayer  from '../assets/FondoLayer.png';

export const BgImage = styled.div`
    width: 100%;
    height: 808px;
    background-image: url(${FondoLayer});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    opacity: 0.1;
    z-index: -1;
`;

