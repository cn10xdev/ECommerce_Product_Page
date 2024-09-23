import React from "react";
//import styled from "styled-components";
import Button from 'react-bootstrap/Button';

//export class ToggleTheme extends React.Component{
export function ToggleTheme(props){

        let themeButtonDisplay;
        const {data} = props
        
        console.log(data);
        if(data){
             themeButtonDisplay = "Dark Mode"
        }else{
             themeButtonDisplay = "Light Mode"
        }
        return(
           
            <>
            <Button variant="primary" id="toggle-button" onClick={()=> props.toggleThemeFunc()}>{themeButtonDisplay}</Button>
                {/*<button id="toggle-button" onClick={()=> props.toggleThemeFunc()}>
                    {themeButtonDisplay}
                </button>*/}
            </>
        )
    
}