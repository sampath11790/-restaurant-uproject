import React  from "react";
import calsses from './Button.module.css'
const Button=(props)=>{
    return(
        <div>
        <button 
        className={`${calsses.btn} ${props.className}`}
        onClick={props.onClick}
         type={props.type}
         >{props.name}</button>
        </div>
    )
}
export default Button