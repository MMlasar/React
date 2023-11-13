import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/intemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../FireBase/config";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const categoria = useParams().categoria;

    useEffect(() => {
        const fetchProductos = async () => {
            const productosRef = collection(db, "productos");
            const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

            try {
                const resp = await getDocs(q);
                const productosData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setProductos(productosData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, [categoria]);

    return (
        <div>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <ItemList productos={productos} titulo="Productos" />
            )}
        </div>
    );
};

export default ItemListContainer;

