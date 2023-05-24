import React, { useState } from 'react';
import { Avatar, Card, ImgName, Info, InfoComics, InfoSeries } from '../../styles/CardCharacter.style';
import { AvatarContainer, TitleCard, TextDetail } from '../../styles/CardCharacter.style';
import circulo from '../../assets/circuloExt.png';
import { AvatarExt } from '../../styles/CardCharacter.style';
import nombreIzq from '../../assets/nombreIzq.png';
import nombreDer from '../../assets/nombreDer.png';
import CardModal from '../character/CardModal.jsx';
import { useFetchDetails } from '../../functions/Data';

export default function CardCharacter({infoCharacter}) {

  let imgPath = infoCharacter.thumbnail.path+".jpg";
  const [ isPopOpen, setIsPosOpen ] = useState(false);
  const [ id, setId ] = useState();

  function openModal(){
    setIsPosOpen(!isPopOpen);
    setId(infoCharacter.id)
  }

  return (
    <>
      <Card onClick={() => openModal()}>
          <TitleCard>
              <ImgName src={nombreIzq}/><Info>{infoCharacter.name}</Info><ImgName src={nombreDer}/>
          </TitleCard>
          <AvatarContainer>
              <AvatarExt/>
              <Avatar src={imgPath}/>
          </AvatarContainer>
          <InfoComics>Comics: <TextDetail>{infoCharacter.comics.available}</TextDetail></InfoComics>
          <InfoSeries>Series: <TextDetail>{infoCharacter.series.available}</TextDetail></InfoSeries>
      </Card>
      {
        !id && !isPopOpen ?
        null :
        <CardModal
            show={isPopOpen}
            handleClose={() => setIsPosOpen(false)}
            infoDetails={infoCharacter}
          >
        </CardModal>
      }
    </>
  )
}
