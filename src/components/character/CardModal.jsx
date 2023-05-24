import React from 'react';
import { ModalDiv, ContentDiv } from '../../styles/CardModal.style';

export default function CardModal({ handleClose, show, children, id }){

    console.log('id :>> ', id);

    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv>
                {children}
                <button
                    onClick={handleClose}
                >
                    Close
            </button>
            </ContentDiv>
        </ModalDiv>
    )
}