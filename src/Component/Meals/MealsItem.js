import React from "react";
import classes from './MealsItem.module.css'
import Form from "../UI/Form/Form";


const MealsItem=(props)=>{
    return(
        <div>
            <li className={classes['li']}>
                <div>
                <h2>{props.name}</h2>
                    <div>
                    <h3>{props.discription}</h3>
                    </div>
                    <div className={classes.img} >
                        <img className={classes.imgs} src={props.images} alt='food'></img>

                    </div>
                    <div className={classes['price']}>
                    <h3>{`$ ${props.price}`}</h3>
                    </div>
                 <Form id={props.id} item={props}></Form>
                </div>
           
            </li>
        </div>
    )
}
export default MealsItem