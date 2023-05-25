import React from 'react';
import { MultimediaContainer } from '../../styles/Multimedia.style';
import { ProgressBarContainer } from '../../styles/Multimedia.style';
import { VideoContainer } from '../../styles/Multimedia.style';
import { ImageContainer } from '../../styles/Multimedia.style';
import ProgressBar from '../progressBar/ProgressBar';
import { TextProgressBar } from '../../styles/ProgressBar.style.js';

export default function Multimedia() {

  return (
    <MultimediaContainer>
        <ProgressBarContainer>
          <TextProgressBar>PROGRESO DE PELICULAS PRODUCIDAS</TextProgressBar>
          <ProgressBar max={1000}/>
        </ProgressBarContainer>
        <VideoContainer>
          <iframe 
            width="362" 
            height="218" 
            src="https://www.youtube.com/embed/dagPKfcYHn4" 
            title="Ultimate Invasion #1 Trailer | Marvel Comics"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </VideoContainer>
        <ImageContainer/>
    </MultimediaContainer>
  )
}

