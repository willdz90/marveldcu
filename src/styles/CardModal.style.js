import styled from 'styled-components';

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
    position: fixed;
    top: 50%;
    left:50%;
    width: 50%;
    height:auto;
    padding: 2rem;
    transform: translate(-50%, -50%);
    background: white;
`;

