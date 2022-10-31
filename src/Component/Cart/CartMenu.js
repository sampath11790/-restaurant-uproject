import React,{useContext} from "react";

import CartContext from "../../Context/CartContext";
import CartItem from "./CartItem";

const CartMenu=()=>{
    const ctx=useContext(CartContext)
    return(
        <React.Fragment>
          <ul>
           { ctx.items.map((item)=>
            
            <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            discription={item.discription}
            price={item.price}
            quantity={item.quantity} 
            ></CartItem>
          )}
          </ul>
        </React.Fragment>
    )
}

export default CartMenu