import React from "react";
import Button from "../Button/Button";
import classes from './Form.module.css'
import Input from "../Input/Input";
const Form=(props)=>{
    const onclickHandler=()=>{
        console.log('form-handler')
    }
    return (
        <div>
        <form>
          <div className={classes.input}>
          {/* <label>Quantity :</label>
          <input type='number'></input> */}
          <Input  label='Quantity :' input={{
             id:'amount',
             type:'number',
             min:1,
             max:5,
             step:1,
             defaultvalue:1,
            
          }}
          
         
          

          ></Input>
          </div>
          <Button name='+Add Item' onClick={onclickHandler} type='button'></Button>
          
        </form>
        </div>
    )
}
export default Form