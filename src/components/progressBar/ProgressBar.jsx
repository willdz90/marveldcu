import React, { useEffect, useState } from 'react';
import { StyledProgressBar } from '../../styles/ProgressBar.style.js';

export default function ProgressBar({ progress, max }) {

    const [ value, setValue ] = useState(0);

    useEffect(() => {

        const interval = setInterval( () => {
            setValue( oldValue => {
                const newValue = oldValue + 1;

                if(newValue === max){
                    clearInterval(interval)
                }

                return newValue;

            });
        }, 3000)
    }, [])
    
  return (
    <>
        <div>Meta de producción: 200 Peliculas</div>
        <StyledProgressBar value={value} max={max}></StyledProgressBar>
        <div>Peliculas producidas: {value}</div>
    </>
  )
}
