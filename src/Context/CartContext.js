import React from "react";

const CartContext=React.createContext({
    items:[],
    Quantity:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    updateItem:(id)=>{},
    clearCart:()=>{},
    removeList:(id)=>{}

})
export default CartContext