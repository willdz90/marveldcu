import React, { useEffect, useState } from 'react';
import { StyledProgressBar,TextGoalMovies } from '../../styles/ProgressBar.style.js';

export default function ProgressBar({ progress, max }) {

    const conteo = parseInt(localStorage.getItem("Movies"));

    console.log('conteo :>> ', conteo);
    const [ value, setValue ] = useState(0);
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const int = getRandomInt(4);
    
    useEffect(() => {

        const interval = setInterval( () => {
            setValue((oldValue) => {
                const newValue = oldValue + int;

                if(newValue === max){
                    clearInterval(interval);
                }
                localStorage.setItem("Movies", newValue);

                return newValue;
            });
        }, 5000);


    }, []);

    const moviesDone = Math.floor((value / max)*100);
    
  return (
    <>
        <TextGoalMovies>Meta de producción: {max} Peliculas</TextGoalMovies>
        <StyledProgressBar value={value} max={max}></StyledProgressBar>
        <TextGoalMovies>Peliculas producidas: {moviesDone}%</TextGoalMovies>
        <TextGoalMovies>Peliculas producidas: {value}</TextGoalMovies>
    </>
  )
}
