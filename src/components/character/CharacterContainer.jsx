import React, { useEffect, useState } from 'react';
import { fetchingData } from '../../functions/Data.js';
import Character from './Character.jsx';
import Pagination from '../pagination/Pagination.jsx';
import { useFetchData } from '../../functions/Data.js';

export default function CharacterContainer() {

  const [ limitInf, setLimitInf ] = useState(0)
  const [ limit, setlimit ] = useState(5);
  const { data: comics, isLoading } = useFetchData(limitInf, limit);
  const [ info, setInfo ] = useState([]);

  const fullresponse = useFetchData(limitInf, limit)
  let comicsList = !isLoading ? comics : null;
  let fetching = fullresponse.isFetching;

  useEffect(()=> {
    fullresponse.refetch();
  },[limit])

  useEffect( () => {
    setInfo(comicsList)
  }, [isLoading,limit])


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
        ? <div>CARGANDO.....</div> :
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
