import { useState } from "react";
import OnBootSwitcher from "./animations/PetOnBoot";

export default function MyPet (){
    const [mode, setMode] = useState("onboot");

    return(
        <div style={{background : "transparent"}}>
            {mode === "onboot" && <OnBootSwitcher/>}
        </div>
    )
}