import React, { useEffect, useState } from 'react';
import { StyledProgressBar,TextGoalMovies } from '../../styles/ProgressBar.style.js';

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
        }, 50);
    }, [])
    
  return (
    <>
        <TextGoalMovies>Meta de producción: 200 Peliculas</TextGoalMovies>
        <StyledProgressBar value={value} max={100}></StyledProgressBar>
        <div>Peliculas producidas: {value}</div>
    </>
  )
}
