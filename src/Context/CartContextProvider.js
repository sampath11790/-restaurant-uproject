import React,{useState} from "react";
import CartContext from "./CartContext";



const CartContextProvider=(props)=>{
 const [items,updateItem]=useState([])
  const additemtoCarthandler=(item)=>{
 
    //updateItem([...items,item])
     let b=true
      items.map((a)=>{
      if(a.id===item.id){
      return b=false
      }

    })
    b===true? updateItem([...items,item]): console.log('This Item added in your Cart')
    

 }

  const removeiteFromcartHandler=()=>{
    console.log('removeiteFromcartHandler')
  }
  // useEffect(()=>{
  //   cartContext.items.push(item)
  // },[cartContext])

    const cartContext={
        items:items,
        Quantity:0,
        addItem: additemtoCarthandler,
        removeItem:removeiteFromcartHandler
    }
   // console.log( 'rerendering',cartContext)
    return(
        <CartContext.Provider value={cartContext}>
          {console.log("cartprovider rerendering")}
           {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider