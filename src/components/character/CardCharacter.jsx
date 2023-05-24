import React from 'react';
import { Avatar, Card, ImgName, Info, InfoComics, InfoSeries } from '../../styles/CardCharacter.style';
import { AvatarContainer, TitleCard, TextDetail } from '../../styles/CardCharacter.style';
import circulo from '../../assets/circuloExt.png';
import { AvatarExt } from '../../styles/CardCharacter.style';
import nombreIzq from '../../assets/nombreIzq.png';
import nombreDer from '../../assets/nombreDer.png';

export default function CardCharacter({infoCharacter}) {

  let imgPath = infoCharacter.thumbnail.path+".jpg";

  return (
    <Card>
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
  )
}
