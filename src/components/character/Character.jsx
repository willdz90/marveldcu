import React from 'react';
import CardCharacter from './CardCharacter.jsx';
import { CardContainer } from '../../styles/CardCharacter.style.js';

export default function Character({charactersList}) {

    // console.log('arrayCharacters :>> ', charactersList);

    return (
        <CardContainer>{
            charactersList?.map((p) => {
                return (
                    <CardCharacter key={p.id} infoCharacter={p}/>
                )
            })
        }</CardContainer>
    )
}
