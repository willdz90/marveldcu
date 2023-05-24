import React from 'react';
import { ArrowNextPage } from '../../styles/Buttons.style';
import { ArrowPrevPage } from '../../styles/Buttons.style.js';
import { PaginationContainer, PaginationText } from '../../styles/Pagination.style';

export default function Pagination({ limit, limitInf, handlePrevPage, handleNextPage}) {

  // console.log('offset, limit :>> ', offset, limit);

  return (
    <PaginationContainer>
      <ArrowPrevPage onClick={ (e) => handlePrevPage(e)}/>
      <PaginationText>
          {limitInf+1} / {limit} 
      </PaginationText>
      <ArrowNextPage onClick={ (e) => handleNextPage(e) }/>
    </PaginationContainer>
  )
}
