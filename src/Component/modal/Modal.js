
import React from "react";
import BackDrop from "./BackDrop";

import Cart from "../Cart/Cart";
import  ReactDOM  from 'react-dom'


const Modal=(props)=>{
    const overLay=<Cart onCart={props.onCart}></Cart>
    return(
        <div>
            {ReactDOM.createPortal(<BackDrop></BackDrop>,document.getElementById('dummy'))}
            {ReactDOM.createPortal(overLay
        ,document.getElementById('cart'))}
        </div>
    )
}
export default Modal