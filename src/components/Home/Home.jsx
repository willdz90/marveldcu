import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Pagination from '../pagination/Pagination';
import Multimedia from '../multimedia/Multimedia';
import CharacterContainer from '../character/CharacterContainer';
import { BgImage } from '../../styles/App.style.js';


export default function Home() {

  const [ isActive, setIsActive ] = useState(false);

  useEffect( () => {
    setIsActive(true)
  },[])

  console.log('isActive :>> ', isActive);

  return (
    <div>
        <BgImage/>
        <Multimedia/>
        <CharacterContainer/>
    </div>
  )
}
