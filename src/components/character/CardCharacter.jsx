import React from 'react';

export default function CardCharacter({infoCharacter}) {

  return (
    <>
        <div>{infoCharacter.name}
        {infoCharacter.comics.available}
        {infoCharacter.series.available}</div>
    </>
  )
}
