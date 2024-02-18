import React from 'react';
import './MenuItem.css';

const MenuItem = (props) => {
    return (

         // eslint-disable-next-line jsx-a11y/alt-text
         <img src={props.user.image} className={'menu-item'}/>


    );
};

export default MenuItem; 