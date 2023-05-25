import React from 'react';
import Multimedia from '../multimedia/Multimedia';
import CharacterContainer from '../character/CharacterContainer';
import { BgImage } from '../../styles/App.style.js';


export default function Home() {

  return (
    <div>
        <BgImage/>
        <Multimedia/>
        <CharacterContainer/>
    </div>
  )
}
