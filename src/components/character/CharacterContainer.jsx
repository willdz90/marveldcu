import React, { useEffect, useState } from 'react';
import { fetchingData } from '../../functions/Data.js';
import Character from './Character.jsx';
import Pagination from '../pagination/Pagination.jsx';

export default function CharacterContainer() {

  const [ dataInfo, setDataInfo ] = useState([]);
  const [ offset, setOffset ] = useState(0);
  const [ limit, setlimit ] = useState(5);

  useEffect(() => {
    async function fetchData() {
      // You can await here for the comic's info
      const response = await fetchingData(offset, limit);
      // Let's set our state with that info
      console.log('response :>> ', response);
      setDataInfo(response.data.data.results)
    }
    fetchData();
  }, [offset, limit]); 

  // if(dataInfo.length!==0) console.log('dataInfo :>> ', dataInfo);

  const handleNextPage = (e) => {
    setOffset(limit+1);
    setlimit(limit+5);
  }

  
  const handlePrevPage = (e) => {
    setOffset(offset-5);
    setlimit(limit-5);
  }

  return (
    <>{
        dataInfo.length!==0
          ? <Character charactersList={dataInfo}/> :
          null
      }
      <Pagination 
        offset={offset} 
        limit={limit} 
        handleNextPage={handleNextPage} 
        handlePrevPage={handlePrevPage}
      />
    </>
  )
}
