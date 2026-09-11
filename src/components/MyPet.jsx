import OnBootSwitcher from "./animations/PetOnBoot";
import useIdleTimer from "../hooks/useIdleTimer";
import SleepingSwitch from "./animations/PetSleeping";

export default function MyPet (){
    const {mode, handleActivity} = useIdleTimer();

    return(
        <div style={{background : "transparent"}} onMouseEnter={handleActivity}>
            {mode === "onboot" && <OnBootSwitcher/>}
        {mode === "sleeping" && <SleepingSwitch/>}
        </div>
    )
}