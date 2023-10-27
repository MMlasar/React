import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Itemcart from "../ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, totalprice } = useCartContext();

    const order = {
        buyer: {
            name: 'marian',
            email: 'marian@gmail.com',
            phone: '123123',
            direccion: 'nuevo mundo'
        },
        items: cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity
        })),
        total: totalprice(),
    };

    const handleclick = () => {
        const db = getFirestore();
        const ordercollection = collection(db, 'order');
        addDoc(ordercollection, order)
            .then(({ id }) => console.log(id));
    };

    if (cart.length === 0)
        return (
            <>
                <p> No Hay elementos en el carrito </p>
                <Link to={'/'}> Hacer compras </Link>
            </>
        );

    return (
        <>
            {cart.map((product) => <Itemcart key={product.id} product={product} />)}
            <p>total: {totalprice()}</p>
            <button onClick={handleclick}>generar orden de compra</button>
        </>
    );
};

export default Cart;
