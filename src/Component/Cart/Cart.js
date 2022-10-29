import React from "react";
import classes from './Cart.module.css'
import Button from "../UI/Button/Button";
import  ReactDOM  from 'react-dom'
const Cart=()=>{
return(

  
    <div >
       {ReactDOM.createPortal(<div className={classes.dummy}></div>,document.getElementById('dummy'))}
       {ReactDOM.createPortal(<div className={classes.cart}> 
       <h1>Amount</h1>
       <h1>22.36</h1>
       <div className={classes.btn}>
       <Button name='order' type='button'></Button>
       <Button  name='cancel' type='button'></Button>
       </div>
      </div>
        ,document.getElementById('cart'))}
    
    
    </div>
)
}
export default Cart