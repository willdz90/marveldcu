import React from 'react';
import { ModalDiv, ContentDiv } from '../../styles/CardModal.style';

export default function CardModal({ handleClose, show, infoDetails }){

    console.log("Detallada", infoDetails);
    
    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv>
            <div style={{ color: "black"}}>
                <div>{infoDetails.id}</div>
                <div>{infoDetails.name}</div>
                <div>{infoDetails.description}</div>
                <div>{infoDetails.urls?.map((i) => {
                    return (
                        <div>{i.url}</div>
                    )
                })}</div>
                <div>{infoDetails.comics.available}</div>
                <div>{infoDetails.thumbnail.path}</div>
                <div>{infoDetails.stories.available}</div>
                <div>{infoDetails.series.available}</div>
            </div>
            <button onClick={handleClose}>
                Close
            </button>
            </ContentDiv>
        </ModalDiv>
    )
}