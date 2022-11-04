import React,{useState} from "react";
import CartContext from "./CartContext";



const CartContextProvider=(props)=>{
 const [items,updateItem]=useState([])
  const additemtoCarthandler=(item)=>{
 
    //updateItem([...items,item])
     let b=true
      items.map((a)=>{
       if(a.id===item.id){
           b=false
      }
      return b
    })
    b===true? updateItem([...items,item]): console.log('This Item added in your Cart')
    

 }

  const removeiteFromcartHandler=(id)=>{
    console.log(id)
   let removedList= items.map((each)=>{
        
      if(id===each.id ){
        let temp=Number(each.quantity)
        each.quantity=temp-1;
        return each
      }
      return each
    })
    //console.log(a)
      updateItem([...removedList])
    console.log('removeiteFromcartHandler')
  }
  const updateitemHandler=(id)=>{
    let updatedList= items.map((each)=>{
        
      if(id===each.id){
        let temp=Number(each.quantity)
        each.quantity=temp+1;
        return each
      }
      return each
    })
    //console.log(a)
      updateItem([...updatedList])
      //console.log(updatedList)

  }
  const clearCartHandler=()=>{
    updateItem([])
  }
  const RemoveHandler=(uid)=>{
    let updatedList=items.filter((item)=>{
      if(item.id!==uid){
        return item
      }
      return
    })
    updateItem([...updatedList])
    //console.log(updatedList)
    console.log('remove Handler')
  }

  // useEffect(()=>{
  //   cartContext.items.push(item)
  // },[cartContext])

    const cartContext={
        items:items,
        Quantity:0,
        addItem: additemtoCarthandler,
        removeItem:removeiteFromcartHandler,
        updateItem:updateitemHandler,
        clearCart:clearCartHandler,
        removeList:RemoveHandler

    }
   // console.log( 'rerendering',cartContext)
    return(
        <CartContext.Provider value={cartContext}>
          {/* {console.log("cartprovider rerendering")} */}
           {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider