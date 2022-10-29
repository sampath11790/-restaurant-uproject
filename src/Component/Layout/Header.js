import {Fragment} from "react";
import Mealsphoto from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import Summary from "../Summary/Summary";


const Header=(props)=>{
      const onCartHandler=()=>{
       
        console.log('header cart handler')
        props.addCartStatus() 
      }
    
    //console.log(Cart)
    return(
         <Fragment>
        <header className={classes.header}>
            <h1>Meals List</h1>
            <HeaderCartButton onCart={onCartHandler}></HeaderCartButton>
            
        </header>
      
        <div className={classes['main-image']}>
        
            <img src={Mealsphoto} alt='a table full of meals '
              />
             
        </div>
       
        <Summary/>
        </Fragment>
    )
}
export default Header