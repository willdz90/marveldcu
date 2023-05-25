import React, { useEffect, useState } from 'react';
import { StyledProgressBar,TextGoalMovies, ProgressBarContainer } from '../../styles/ProgressBar.style.js';

export default function ProgressBar({ progress, max }) {

    function stopInterval(interval){
        clearInterval(interval);
    }

    const [ value, setValue ] = useState(0);
    
    useEffect(() => {

        const interval = setInterval( () => {
            setValue((oldValue) => {
                const newValue = oldValue + 1;

                if(newValue === 200){
                    stopInterval(interval)
                }

                return newValue;
            });
        }, 50);
    }, []);
    
  return (
    <>
        <TextGoalMovies>Meta de producción: {max} Peliculas</TextGoalMovies>
        <StyledProgressBar value={value} max={200}></StyledProgressBar>
        <TextGoalMovies>Peliculas producidas: {value}</TextGoalMovies>
    </>
  )
}
