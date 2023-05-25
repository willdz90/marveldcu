import React, { useEffect, useState } from 'react';
import { StyledProgressBar,TextGoalMovies, TextGoalSeries } from '../../styles/ProgressBar.style.js';

export default function ProgressBar({ progress, max }) {

    const [ value, setValue ] = useState(0);

    useEffect(() => {

        const interval = setInterval( () => {
            setValue((oldValue) => {
                const newValue = oldValue + 1;

                if(newValue == 100){
                    clearInterval(interval)
                }

                return newValue;
            });
        }, 7500);
    }, []);
    
  return (
    <>
        <TextGoalMovies>Meta de producción: 100 Peliculas</TextGoalMovies>
        <StyledProgressBar value={value} max={100}></StyledProgressBar>
        <TextGoalMovies>Peliculas producidas: {value}</TextGoalMovies>
    </>
  )
}
