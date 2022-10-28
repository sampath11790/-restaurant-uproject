import React from "react";
import Header from "./Component/Layout/Header";
import Summary from "./Component/Summary/Summary";
import Meals from "./Component/Meals/Meals";
const mealsArray=[
    
  {id:1,name:'Suchi',discription:"Fineest fidh and veggies",price:22.99},
  {id:2,name:'Schnitzel',discription:"A greman special ",price:12.99},
  {id:3,name:'Barbecue Burger',discription:"American,raw,,meaty",price:16.50},
  {id:4,name:'Green Bowl',discription:"Healthy...and green ",price:18.85}
]
function App() {
  return (
    <React.Fragment>
      <Header></Header>
     
      <div>
      <Meals meals={mealsArray}/>
      </div>
      
    </React.Fragment>
  );
}

export default App;
