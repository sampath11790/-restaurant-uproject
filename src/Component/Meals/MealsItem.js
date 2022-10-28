import React from "react";
import classes from './MealsItem.module.css'



const MealsItem=(props)=>{
    return(
        <div>
            <li className={classes['li']}>
                <div>
                <h2>{props.name}</h2>
                    <div>
                    <h3>{props.discription}</h3>
                    </div>
                    <div className={classes['price']}>
                    <h3>{`$ ${props.price}`}</h3>
                    </div>
                </div>
           
            </li>
        </div>
    )
}
export default MealsItem