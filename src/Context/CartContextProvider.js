import React,{useState} from "react";
import CartContext from "./CartContext";



const CartContextProvider=(props)=>{
 const [items,updateItem]=useState([])
  const additemtoCarthandler=(uitem)=>{
    if(items.length<=0){
      updateItem([...items,uitem])
    }else{
      let flag=false
      let b= items.map((each)=>{
       // console.log( uitem.quantity)
      
        
         if(each.id===uitem.id ){
          let temp=each.quantity*1
          each.quantity=temp+uitem.quantity*1;
          flag=true
         
        }
       
       return each
         
      
      })
      flag===true?updateItem([...b]):updateItem([...items,uitem])
     
    }
    
  
    //b===true? updateItem([...items,updatedList]): console.log('This Item added in your Cart')
   // console.log(updatedList)

 }

  const removeitemFromcartHandler=(id)=>{
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
        addItem: additemtoCarthandler,  //add item list to cart
        removeItem:removeitemFromcartHandler,//plus button 
        updateItem:updateitemHandler,  //minus button
        clearCart:clearCartHandler,  //clear cart
        removeList:RemoveHandler     //removing item from the cart

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