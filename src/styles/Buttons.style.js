import styled from "styled-components";
import rightArrow from '../assets/rightArrow.png';
import leftArrow from '../assets/leftArrow.png';

export const ArrowNextPage = styled.button`
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-image: url(${rightArrow});
    background-size: cover;
    background-repeat: no-repeat;
`;
export const ArrowPrevPage = styled.button`
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-image: url(${leftArrow});
    background-size: cover;
    background-repeat: no-repeat;
`;