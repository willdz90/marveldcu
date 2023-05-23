import React from 'react';
import { ArrowNextPage } from '../../styles/Buttons.style';
import { ArrowPrevPage } from '../../styles/Buttons.style.js';

export default function Pagination({offset, limit, handlePrevPage, handleNextPage}) {

  // console.log('offset, limit :>> ', offset, limit);

  return (
    <>
      <ArrowPrevPage/>
      <div>
          {offset+1} / {limit} 
      </div>
      <ArrowNextPage onClick={ (e) => handleNextPage(e) }/>
    </>
  )
}
