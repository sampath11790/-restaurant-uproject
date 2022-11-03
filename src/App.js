import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import CartContextProvider from "./Context/CartContextProvider";
import Meals from "./Component/Meals/Meals";

 import Modal from './Component/modal/Modal'

const mealsArray=[
    
  {id:1,name:'Sushi',discription:"Finest fish and veggies",price:22.99,img:'https://imgk.timesnownews.com/story/sushi.gif'},
  {id:2,name:'Schnitzel',discription:"A greman special ",price:12.99,img:'https://www.foodnetwork.com/content/dam/images/food/fullset/2019/9/25/MW404_chicken-snitzel_s4x3.jpg'},
  {id:3,name:'Barbecue Burger',discription:"American,raw,meaty",price:16.50,img:'https://i.pinimg.com/originals/bc/27/0b/bc270b810d0e07417e2fc92af7d97dae.jpg'},
  {id:4,name:'Green Bowl',discription:"Healthy...and green ",price:18.85,img:'https://saladswithanastasia.com/wp-content/uploads/2020/05/new-french-green-salad-social.jpg'}
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
