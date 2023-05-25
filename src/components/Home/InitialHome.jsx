import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Pagination from '../pagination/Pagination';
import Multimedia from '../multimedia/Multimedia';
import CharacterContainer from '../character/CharacterContainer';
import { BgImage } from '../../styles/App.style.js';


export default function InitialHome() {

  return (
    <div>
        <BgImage/>
        <Multimedia/>
    </div>
  )
}
