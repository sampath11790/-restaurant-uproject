import React ,{useContext}from "react";
import Button from "../Button/Button";
import classes from './Form.module.css'
import Input from "../Input/Input";
import CartContext from "../../../Context/CartContext";
const Form=(props)=>{
    const ctx=useContext(CartContext)
    
    const onclickHandler=(event)=>{
       const quantity=document.getElementById(props.id).value 
       event.preventDefault()
       ctx.addItem({...props.item,quantity:quantity})

       //console.log(event.target.value)
      // console.log(props.item)
        //console.log('form-handler')
    }
    return (
        <div>
        <form onSubmit={onclickHandler}>
          <div className={classes.input}>
          {/* <label>Quantity :</label>
          <input type='number'></input> */}
          <Input  label='Quantity :' input={{
             id:props.id,
             type:'number',
             min:1,
             max:5,
             step:1,
             defaultValue:1
            }}
          ></Input>
          </div>
          <Button name='+Add Item'  type='submit' className={classes.sbutton}></Button>
          
        </form>
        </div>
    )
}
export default Form