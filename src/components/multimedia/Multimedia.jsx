import React from 'react';
import { ImagePoster, MultimediaContainer } from '../../styles/Multimedia.style';
import { ProgressBarContainer } from '../../styles/Multimedia.style';
import { VideoContainer } from '../../styles/Multimedia.style';
import { ImageContainer } from '../../styles/Multimedia.style';
import poster from '../../assets/poster.jpg';

export default function Multimedia() {

  return (
    <MultimediaContainer>
        <ProgressBarContainer>Barra de Peliculas</ProgressBarContainer>
        <VideoContainer>
          <iframe 
            width="350" 
            height="210" 
            src="https://www.youtube.com/embed/dagPKfcYHn4" 
            title="Ultimate Invasion #1 Trailer | Marvel Comics" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </VideoContainer>
        <ImageContainer>
          <ImagePoster src={poster}/>
        </ImageContainer>
    </MultimediaContainer>
  )
}

