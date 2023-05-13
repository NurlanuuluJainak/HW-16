import { useState ,useEffect} from "react"
export const  useTimer = (inition) => {
    const [timeLeft,setTimeLeft] = useState(inition)
    const [state,setState] = useState(false)


    useEffect(() => {
     const interVal = setInterval(() => {
      state &&  setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : null)
     }, 1000);
     if(timeLeft === 0) setState(false)
     return () => {
        clearInterval(interVal)
     }
    },[timeLeft,state])
    const handleStart = () => {
        if(timeLeft === 0) setTimeLeft(inition)
        setState(true)
    }
    const handleStop = () => {
        setState(false)
    }
    const handleReset = () => {
        setState(false)
        setTimeLeft(inition)
    }

    return [handleReset,handleStart,handleStop,timeLeft,state]
}