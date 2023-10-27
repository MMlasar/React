import React, { useState, useEffect } from "react";
import Title from './Title';
import ItemList from "../ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'products');

        if (categoriaId) {
            const filteredQuery = query(productsCollection, where('categoria', '==', categoriaId));

            getDocs(filteredQuery)
                .then((querySnapshot) => {
                    const products = [];
                    querySnapshot.forEach((doc) => {
                        products.push({ id: doc.id, ...doc.data() });
                    });
                    setData(products);
                })
                .catch((error) => {
                    console.error("Error getting documents: ", error);
                });
        } else {
            getDocs(productsCollection)
                .then((querySnapshot) => {
                    const products = [];
                    querySnapshot.forEach((doc) => {
                        products.push({ id: doc.id, ...doc.data() });
                    });
                    setData(products);
                })
                .catch((error) => {
                    console.error("Error getting documents: ", error);
                });
        }
    }, [categoriaId]);

    return (
        <>
            <Title greeting={texto} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
