import React,{useContext}from "react";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../Context/CartContext";
const HeaderCartButton=(props)=>{
    const ctx=useContext(CartContext)
    let quantity=0
    ctx.items.map((item)=>{
       return quantity=quantity+item.quantity*1
    })
   
    
    return(
        
            <button className={classes.button} onClick={props.onCart}>
                <span >
                    Your Cart
                </span>
                
                <span className={classes.badge}>
                   {quantity}
                </span>
            </button>
        
    )

}

export default HeaderCartButton