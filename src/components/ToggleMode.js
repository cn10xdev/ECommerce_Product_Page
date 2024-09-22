import { useEffect, useState } from "react";
const ToggleMode = () =>{
    const [isOn, setIsOn] = useState(false);

    const toggle = () =>{
        setIsOn(!isOn);
    }
    useEffect(()=>{
        document.body.style.backgroundColor = isOn? "black" : "white";
        document.body.style.color = isOn ? "white" : "black";
    },[isOn])
    return(
        <div>
            <button onClick={toggle} className="toggle-btn">
                {isOn ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}

export default ToggleMode;