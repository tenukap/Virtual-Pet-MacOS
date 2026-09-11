import eye01 from '../../assets/Robot/Eye/eye01.png'
import eye02 from '../../assets/Robot/Eye/eye02.png'
import react, { useEffect, useState } from 'react'

const onBoot = [eye01,eye02]

export default function OnBootSwitcher(){
    const[currentIndex, setCurrentIndex] = useState(0)


    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentIndex((prev)=> (prev === onBoot.length -1? 0: prev+1))
        }, 
       1000,
    );
     return() => clearInterval(interval)
    },[]);

    return(
        <img src={onBoot[currentIndex] } alt='"Onboot robot images' draggable = "false"/>
    )
}