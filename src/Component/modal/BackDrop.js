
import React from "react";
import classes from './BackDrop.module.css'
const BackDrop=(props)=>{
    return(
        <div className={classes.dummy} onClick={props.onCart}></div>
    )
}

export default BackDrop