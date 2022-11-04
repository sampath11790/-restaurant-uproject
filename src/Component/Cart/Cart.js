import React,{useContext,useState} from "react";
import classes from './Cart.module.css'
import Button from "../UI/Button/Button";
import CartContext from '../../Context/CartContext'
import CartMenu from './CartMenu'
import CartEmptyMessage from "./CartEmptyMessage";
const Cart=(props)=>{
  const [carterrorMessage,setcarterrorMessage]=useState(false)
  const ctx=useContext(CartContext)
  let totalAmount=0

  ctx.items.map((item)=>{
    
   let tempvalue=totalAmount+item.price*item.quantity;
    return totalAmount= Math.round(tempvalue * 100) / 100

     //console.log(item.price)
})
const orderHandler=()=>{
  if(ctx.items.length===0){
    setcarterrorMessage(true)
  }
  console.log(ctx.items)
}
const clearHandler=()=>{
  ctx.clearCart()
}
  
 // console.log(ctx.items.lengtth)
return(

  
    <div >
       
       <div className={classes.cart}> 
       <CartMenu/>
       {carterrorMessage&&<CartEmptyMessage/>}
       <h1>Amount</h1>
       <h1>{totalAmount}</h1>
      
       <div className={classes.btn}>
       <Button name='clearCart' type='button' onClick={clearHandler} className={classes.clearbtn}></Button>
       <Button  name='Cancel' type='button' onClick={props.onCart} className={classes.cancelbtn} ></Button>
       <Button name='Place Order' type='button'  onClick={orderHandler} className={classes.orderbtn}></Button>
       
       </div>
      </div>
     
    
    </div>
)
}
export default Cart