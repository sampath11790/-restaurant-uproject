import React from "react";
import classes from './Meals.module.css'
import MealsItem from "./MealsItem";
import Card from '../Card/Card'

const Meals=(props)=>{
    return(
        <Card>
        <div className={classes.meals} >
        <ul className={classes.UI}>
       {props.meals.map((item)=>
       <MealsItem
       key={item.id}
       name={item.name}
       discription={item.discription}
       price={item.price}
       ></MealsItem>)}
       </ul>
    </div>
    </Card>
    )
}
export default Meals