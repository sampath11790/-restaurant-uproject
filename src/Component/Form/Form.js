import React from "react";
import Button from "../UI/Button";
import classes from './Form.module.css'
const Form=(props)=>{
    const onclickHandler=()=>{
        console.log('form-handler')
    }
    return (
        <div>
        <form>
          <div className={classes.input}>
          <label>Quantity :</label>
          <input type='number'></input>
          </div>
          <Button name='+Add Item' onClick={onclickHandler} type='button'></Button>
          
        </form>
        </div>
    )
}
export default Form