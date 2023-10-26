import React, { useState } from 'react';
import "./itemDetail.css"
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { usecartcontext } from '../../context/CartContext';

const ItemDetail = ({ data }) => {
    const [gotocart, setgocart] = useState(false);
    const {addProduct} = usecartcontext ();

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
        setgocart(true);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail__img" src={data.image} alt="" />
            </div>
            <div className="content">
                <h1>{data.title}</h1>
                <div className="button-container">
                    {gotocart ? (
                        <Link to={'/cart'}>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
