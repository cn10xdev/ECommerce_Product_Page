import {useState,useEffect} from 'react'

export default function ToggleMode(){
    const[isToggle,setIsToggle]=useState(false)
    useEffect(()=>{
      document.body.style.backgroundColor=isToggle?'black':'white'
      document.body.style.color=isToggle?'white':'black'
    },[isToggle])
    return(
        <>
        <button onClick={()=>setIsToggle(!isToggle)} className='toggle'>{isToggle?'Light Mode':'Dark Mode'}</button>
        </>
    )
}