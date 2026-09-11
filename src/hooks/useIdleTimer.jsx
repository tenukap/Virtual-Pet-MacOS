import { useState,useRef, useEffect } from "react";

export default function useIdleTimer(){
    const [mode, setMode] = useState("onboot");
    const idleTimerRef = useRef(null);

    //sleep function
    const goToSleep = () =>{
        setMode("sleeping")

    };

    const HandleActivity = () =>{
        clearTimeout(idleTimerRef.current);
        setMode("onboot");
        idleTimerRef.current= setTimeout(goToSleep,10000);
    }

    useEffect(()=>{
        idleTimerRef.current = setTimeout(goToSleep,10000)
        return() => clearTimeout(idleTimerRef.current)
    },[]);

    return {mode, HandleActivity};

}