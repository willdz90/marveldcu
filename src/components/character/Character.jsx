import React from 'react';
import CardCharacter from './CardCharacter.jsx';
import { CardContainer } from '../../styles/CardCharacter.style.js';
import Loading from '../Loading/Loading.jsx';

export default function Character({charactersList}) {

    return (
        <>
            {
                !charactersList ? 
                <Loading/> :
                <CardContainer>{
                    charactersList&&charactersList?.map((p) => {
                        return (
                            <CardCharacter key={p.id} infoCharacter={p}/>
                        )
                    })
                }</CardContainer>
            }
        </>
    )
}
