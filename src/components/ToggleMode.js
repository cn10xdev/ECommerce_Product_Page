import {useState,useEffect} from 'react'

export default function ToggleMode(){
    const[isToggle,setIsToggle]=useState(false)
    return(
        <>
        <button onClick={()=>setIsToggle(!isToggle)}>{isToggle?'Light Mode':'Dark Mode'}</button>
        </>
    )
}