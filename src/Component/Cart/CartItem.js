import React from "react";
import classes from'./CartItem.module.css'
const CartItem=(props)=>{

    return(
   <div>
    <li className={classes.item}>{props.name} --- {props.price} </li>
   </div>
    )
}

export default CartItem