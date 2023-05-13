import { useState } from "react";


export function useCounter (initiolValue){
    const [count,setCount] = useState(initiolValue)
     
    function increment(){
        setCount(count + 4)
    }
    function decrement(){
       if(count !== 0){
        setCount(count -2)
       }
    }
     function remove(){
        setCount(count === 0)
     }
    return [count , increment, decrement,remove]

}