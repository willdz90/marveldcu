import React from 'react';
import loader from '../../assets/loader1.gif';
import { ImgLoader, ImgLoaderContainer } from '../../styles/Loading.style.js';

export default function Loading() {
  return (
    <ImgLoaderContainer>
      <ImgLoader src={loader}/>
    </ImgLoaderContainer>
  )
}
