import styled, { keyframes } from "styled-components";

export const animateProgress = keyframes`
    100% { background-position: -100px 0px; }
`;
    
export const StyledProgressBar = styled.progress`
    width: 85%; 
    height: 15%; 
    /* background: linear-gradient(180deg, #31969D 0%, #65E6F4 31.77%, #24AEBD 66.15%, #1299A8 98.96%); */
    box-shadow: 0px 0px 4px #FFA942, 0px 0px 4px rgba(255, 169, 66, 0.25), 0px 0px 7px rgba(255, 169, 66, 0.25);    
    border: 4px solid #1E2328; 
    /* 
    background-color: blue !important;
    */
    -webkit-transform: skew(160deg);
    -moz-transform: skew(160deg);
    -ms-transform: skew(160deg);
    -o-transform: skew(160deg);
    transform: skew(160deg); 
    
    &::-webkit-progress-value{
        background-image: linear-gradient(180deg, #31969D 0%, #65E6F4 31.77%, #24AEBD 66.15%, #1299A8 98.96%);

       -webkit-animation: animateProgress 5s linear infinite;
        animation: animateProgress 5s linear infinite;
    }
`;

export const TextProgressBar = styled.span`
    letter-spacing: 1.5px;
`;