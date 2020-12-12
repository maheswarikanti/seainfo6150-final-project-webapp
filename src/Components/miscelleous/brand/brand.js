import React from 'react';
import './brand.css';
import logo from '../../../Assests/icons/BurgerLogo.png';

const brand=(props)=>{
    let vclass=" ";
    if(props.show){
        vclass="show";
    }
    let all_class=["brand"];
    all_class.push(vclass);
    return(
        <div className={all_class.join(" ")}>
            <p className="brandnum">K</p>
            <p className="name">ool Corner</p>
            <div className="image-container">
            <img src={logo} alt="Compoany Logo"/>
            </div>
            <p className="lastTitle">Pizza and Burger</p>
        </div>

    );
}

export default brand;