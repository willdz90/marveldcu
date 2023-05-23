import React from 'react';
import Header from '../header/Header';
import Pagination from '../pagination/Pagination';
import Multimedia from '../multimedia/Multimedia';
import CharacterContainer from '../character/CharacterContainer';


export default function Home() {
  return (
    <div>
        <Multimedia/>
        <CharacterContainer/>
    </div>
  )
}
