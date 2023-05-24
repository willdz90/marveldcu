import React, { useEffect, useState } from 'react';
import Character from './Character.jsx';
import Pagination from '../pagination/Pagination.jsx';
import { useFetchData } from '../../functions/Data.js';
import Loading from '../Loading/Loading.jsx';

export default function CharacterContainer() {

  //Local states
  const [ limitInf, setLimitInf ] = useState(0)
  const [ limit, setlimit ] = useState(5);
  const { data: comics, isLoading } = useFetchData(limitInf, limit);

  //this constant is used for monitoring changes into the data
  const fullresponse = useFetchData(limitInf, limit)
  let fetching = fullresponse.isFetching;
  
  //let's create our list of comics
  let comicsList = !isLoading ? comics : null;

  useEffect(()=> {
    fullresponse.refetch();
  },[limit])

  //Functions for handle the pagination
  const handleNextPage = (e) => {
    setLimitInf(limit)
    setlimit(limit+5);
  }
  
  const handlePrevPage = (e) => {
    if(limitInf>0){
      setLimitInf(limitInf-5)
      setlimit(limit-5);
    }
  }

  return (
    <>
      {
        fetching
        ? <Loading/> :
        <Character charactersList={comicsList}/> 
      }
      <Pagination 
        limitInf={limitInf}
        limit={limit} 
        handleNextPage={handleNextPage} 
        handlePrevPage={handlePrevPage}
      />
    </>
  )
}
