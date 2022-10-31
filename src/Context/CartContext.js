import React from "react";

const CartContext=React.createContext({
    items:[],
    Quantity:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    updateItem:(id)=>{}

})
export default CartContext