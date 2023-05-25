import React, { useEffect, useState } from 'react';
import { StyledProgressBar,TextGoalMovies } from '../../styles/ProgressBar.style.js';

export default function ProgressBar({ progress, max }) {

    
    const conteo = localStorage.getItem("Movies");
    const moviesCount = conteo == null ? 0 : parseInt(conteo);

    console.log('conteo :>> ', conteo);

    const [ value, setValue ] = useState(moviesCount);

    function getRandomInt(limitSup) {
        return Math.floor(Math.random() * limitSup);
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
        }, 1000);


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
