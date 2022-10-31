import React,{useContext} from "react";
import classes from './Cart.module.css'
import Button from "../UI/Button/Button";
import CartContext from '../../Context/CartContext'
import CartMenu from './CartMenu'
const Cart=(props)=>{
  const ctx=useContext(CartContext)
  let totalAmount=0

  ctx.items.map((item)=>{
    
   let tempvalue=totalAmount+item.price*item.quantity;
   totalAmount= Math.round(tempvalue * 100) / 100

     //console.log(item.price)
})
const orderHandler=()=>{
  console.log(ctx.items)
}
  
 // console.log(ctx.items.lengtth)
return(

  
    <div >
       
       <div className={classes.cart}> 
       <CartMenu></CartMenu>
       <h1>Amount</h1>
       <h1>{totalAmount}</h1>
      
       <div className={classes.btn}>
       <Button  name='cancel' type='button' onClick={props.onCart}></Button>
       <Button name='order' type='button'  onClick={orderHandler}></Button>
       
       </div>
      </div>
     
    
    </div>
)
}
export default Cart