import React from "react";
import classes from './CartEmptyMessage.module.css'


const CartEmptyMessage=()=>{
    return(<div>
        <h1 className={classes.msg}>Please add Item</h1>
    </div>)
}

export default CartEmptyMessage