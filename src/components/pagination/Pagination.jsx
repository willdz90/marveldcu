import React from 'react';
import { ArrowNextPage } from '../../styles/Buttons.style';
import { ArrowPrevPage } from '../../styles/Buttons.style.js';
import { PaginationContainer } from '../../styles/Pagination.style';

export default function Pagination({ limit, limitInf, handlePrevPage, handleNextPage}) {

  // console.log('offset, limit :>> ', offset, limit);

  return (
    <PaginationContainer>
      <ArrowPrevPage onClick={ (e) => handlePrevPage(e)}/>
      <div>
          {limitInf+1} / {limit} 
      </div>
      <ArrowNextPage onClick={ (e) => handleNextPage(e) }/>
    </PaginationContainer>
  )
}
