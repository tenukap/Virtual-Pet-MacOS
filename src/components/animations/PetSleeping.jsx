import {useEffect,useState} from 'react'
//importing images at once
const Sleeping = import.meta.glob('../../assets/Robot/Sleeping/*.png', {eager : true});

//assign Sleeping into array
const SleepingFrames = Object.values(Sleeping).map((m) => m.default);

export default function SleepingSwitch(){
    const [currentIndex , setCurrentIndex] = useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentIndex((prev)=> (prev === SleepingFrames.length -1? 0 : prev+1))
        }, 1000);
        return() => clearInterval(interval)
    },[]);
    

    return(
         <img src={SleepingFrames[currentIndex] } alt='"Sleeping robot images' draggable = "false"/>
    )
}
