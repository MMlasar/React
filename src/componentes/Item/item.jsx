import './item.css';
import React from 'react';

const Item = ({info}) => {
    return (
        <div className="film">
            <img src= {info.imge} alt=""/>
            <p> {info.title} </p>
            
        </div>
    );
}

export default Item;



