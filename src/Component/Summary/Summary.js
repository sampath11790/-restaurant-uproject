import React from "react";
import classes from './Summary.module.css'

const Summary=()=>{
    return(
        <React.Fragment >
            <div  className={classes['summary-box']}>
            <h1>
             Delicious Food,Delivered To You
            </h1>
            <h3>
             <p>
                choose your meal from our board selection of avaliable meals and enjoy a delicious
                lunch or dinner at home 
             </p>
             <p>
                All our meals are cookesd with high-quality ingredients,just-in-time and of time of course by
                experience chefs
             </p>
             
            </h3>
            </div>
        </React.Fragment>
    )
}
export default Summary
