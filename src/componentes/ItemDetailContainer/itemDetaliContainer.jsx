import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/itemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
            .catch(error => console.error("Error fetching data: ", error));
    }, [detalleId]);

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;

