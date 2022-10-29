import {Fragment} from "react";
import Mealsphoto from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import Summary from "../Summary/Summary";
import Cart from "../Cart/Cart";
const Header=()=>{
    console.log(Cart)
    return(
         <Fragment>
        <header className={classes.header}>
            <h1>Meals List</h1>
            <HeaderCartButton></HeaderCartButton>
            
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