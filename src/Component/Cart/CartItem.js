import React,{useContext} from "react";
import classes from'./CartItem.module.css'
import Button from "../UI/Button/Button";
import CartContext from "../../Context/CartContext";

const CartItem=(props)=>{
    const ctx=useContext(CartContext)
    const MinusHandler=()=>{
      //console.log(ctx.items)
     // console.log(props)
    //if(props.qu) 
    if(Number(props.quantity)!==1){
        ctx.removeItem(props.id) 
    } 
       
     console.log('am MinusHandler')
    }
    const PlusHandler=()=>{
        if(Number(props.quantity)<5){
            ctx.updateItem(props.id) 
        }
        //ctx.updateItem(props.id)  
        console.log('am PlusHandler')

    }
    const RemoveListHandler=()=>{
     ctx.removeList(props.id)
    }

    return(
   <div>
    <li className={classes.item}>
        <div>
        {props.name} --- {props.price}X{props.quantity}
        </div>
        <div className={classes.btn}>
        <Button name='-' type='button' onClick={ MinusHandler}></Button>
        <Button name='+' type='button' onClick={ PlusHandler}></Button>
        <Button name='Remove' type='button' onClick={RemoveListHandler} className={classes.removebtn}></Button>
        </div>
    </li>
   </div>
    )
}

export default CartItem