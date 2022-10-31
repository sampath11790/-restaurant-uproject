import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import CartContextProvider from "./Context/CartContextProvider";
import Meals from "./Component/Meals/Meals";

 import Modal from './Component/modal/Modal'
const mealsArray=[
    
  {id:1,name:'Suchi',discription:"Fineest fidh and veggies",price:22.99},
  {id:2,name:'Schnitzel',discription:"A greman special ",price:12.99},
  {id:3,name:'Barbecue Burger',discription:"American,raw,,meaty",price:16.50},
  {id:4,name:'Green Bowl',discription:"Healthy...and green ",price:18.85}
]
function App() {
  const [cartStatus,setCartStatus]=useState(false)
  const cartHandler=()=>{
    setCartStatus(!cartStatus)
    console.log('setcart')
  }
 

  return (
    
    <CartContextProvider>
     <Header  addCartStatus={cartHandler}></Header >
     <Meals meals={mealsArray}/>
     {cartStatus&&<Modal onCart={cartHandler}></Modal >}
    </CartContextProvider>
  );
}

export default App;
