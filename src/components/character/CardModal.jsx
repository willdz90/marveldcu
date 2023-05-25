import React from 'react';
import nombreIzq from '../../assets/nombreIzq.png';
import nombreDer from '../../assets/nombreDer.png';
import { TitleCard } from '../../styles/CardCharacter.style';
import rightArrow from '../../assets/rightArrow.png';
import { ModalDiv, 
    ContentDiv, 
    ContentInformation, 
    DescriptionDiv,
    PosterImg,
    NameCharacter,
    ImgNameCharacter,
    LeftDiv,
    RightDiv,
    InfoAdditional,
    TextInfoC,
    ArrowLink,
    LinksCharacter,
    ButtonContainer, CloseButton
} from '../../styles/CardModal.style';

export default function CardModal({ handleClose, show, infoDetails }){

    let imageUrl = infoDetails.thumbnail.path+".jpg";
    let infoDescription = infoDetails.description.length!==0 
        ? infoDetails.description : 
        "Sorry!, There is no biography available for this character right now."

    return (
        <ModalDiv block={show ? "block" : "none"}>
            <ContentDiv>
                <ButtonContainer>
                    <CloseButton onClick={handleClose}/>
                </ButtonContainer>
                <TitleCard>
                    <ImgNameCharacter src={nombreIzq}/>
                    <NameCharacter>{infoDetails.name}</NameCharacter>
                    <ImgNameCharacter src={nombreDer}/>
                </TitleCard>
            <ContentInformation>
                <LeftDiv>
                    <PosterImg src={imageUrl} alt="none"/>
                    <InfoAdditional>Comics: <TextInfoC>{infoDetails.comics.available}</TextInfoC></InfoAdditional>
                    <InfoAdditional>Stories: <TextInfoC>{infoDetails.stories.available}</TextInfoC></InfoAdditional>
                    <InfoAdditional>Series: <TextInfoC>{infoDetails.series.available}</TextInfoC></InfoAdditional>
                </LeftDiv>
                <RightDiv>
                    <DescriptionDiv><h4>Biography</h4> {infoDescription}</DescriptionDiv>
                    <div><h4>More information</h4>{infoDetails.urls?.map((i) => {
                        return (
                            <LinksCharacter key={i.url}>
                                { i.type==="detail" ? "Detailed Information " : 
                                  i.type==="comiclink" ? "Comics related " : 
                                  i.type==="wiki" ? "WikiInfo " : null} 

                                <a href={i.url} target="_blank">
                                    <ArrowLink src={rightArrow}/>
                                </a>
                            </LinksCharacter>
                        )
                    })}</div>
                </RightDiv>
            </ContentInformation>
            </ContentDiv>
        </ModalDiv>
    )
}