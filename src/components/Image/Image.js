import React from 'react';
import './Image.css';

const image = (props) => {
    switch (props.size) {
        case 'smale':
            return <img className={'image'} src={props.image} alt={props.name}/>
        case 'large':
            return <img className={'image'} src={props.image} alt={props.name}/>
        default:
            return <img className={'image'} src={props.image} alt={props.name}/>
    }


};


export default image; 