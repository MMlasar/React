import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Itemcart from "../ItemCart";

const Cart = () => { 
    const { cart, totalprice } = useCartContext();

    if (cart.length === 0)
        return (
            <>
                <p> No Hay elementos en el carrito </p>
                <Link to={'/'}> Hacer compras </Link>
            </>
        );

    return (
        <>
            {
                cart.map(product => <Itemcart key={product.id} product={product} />)
            }
            <p>
                total: {totalprice()}
            </p>
        </>
    )
}

export default Cart;
