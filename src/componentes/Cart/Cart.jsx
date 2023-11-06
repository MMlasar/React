import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Itemcart from "../ItemCart/itemcart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, totalprice } = useCartContext();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        direccion: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const order = {
        buyer: formData,
        items: cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
        })),
        total: totalprice(),
    };

    const handleclick = () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.direccion) {
            alert("Por favor, complete todos los campos del formulario.");
            return;
        }

        const db = getFirestore();
        const ordercollection = collection(db, 'order');
        addDoc(ordercollection, order)
            .then(({ id }) => {
                console.log(id);
                alert("La orden de compra ha sido generada.");
            });
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
            <form>
                <h2>Información del comprador</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección"
                    value={formData.direccion}
                    onChange={handleInputChange}
                />
                <button onClick={handleclick}>Generar orden de compra</button>
            </form>
        </>
    );
};

export default Cart;
