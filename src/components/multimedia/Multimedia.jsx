import React from 'react';
import { MultimediaContainer } from '../../styles/Multimedia.style';
import { ProgressBarContainer } from '../../styles/Multimedia.style';
import { VideoContainer } from '../../styles/Multimedia.style';
import { ImageContainer } from '../../styles/Multimedia.style';

export default function Multimedia() {
  return (
    <MultimediaContainer>
        <ProgressBarContainer>Barra de Peliculas</ProgressBarContainer>
        <VideoContainer>Video</VideoContainer>
        <ImageContainer>Imagen</ImageContainer>
    </MultimediaContainer>
  )
}
