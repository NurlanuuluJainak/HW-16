import React, { useEffect, useState } from 'react'
import { getPadTime } from './getPadTime'

import { useTimer } from './hooks/useTimer'
export const Timer = () => {
   const  [handleReset,handleStart,handleStop,timeLeft,state] = useTimer(2*60)
    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(timeLeft - minutes * 60)
  return (
    <div style={{marginLeft:"500px",marginTop:"50px"}}>
        <div style={{marginLeft:"20px",fontSize:"2rem"}}>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
        <div style={{display:"flex",gap:"20px" ,marginTop:"10px"}}>
            {state ?  (<button onClick={handleStop}>Stop</button>):(<button onClick={handleStart}>Start</button>)  }
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}


