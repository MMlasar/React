import './itemCount.css';
import React, {useState,useEffect} from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [conut, setcount] = useState (parseInt(initial))

    const incrementCount = () => {
      setcount(conut + 1);
    }
    
    const decrementCount = () => {
      setcount(conut - 1);
    }

    useEffect( () => {
        setcount (parseInt (initial));
    }, [initial])
    
    return (
      <div className='counter'>
        <button disabled= {conut <= 1} onClick={decrementCount}>-</button>
        <span> {conut} </span>
        <button disabled= { conut >= stock} onClick={incrementCount}>+</button>
        <div>
          <button disabled= {stock <= 0 } onClick={() => onAdd (conut)} >Agregar al carrito</button>
        </div>
      </div>
    );
}

export default ItemCount;