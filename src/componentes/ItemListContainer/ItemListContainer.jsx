import React, { useState, useEffect } from "react";
import Title from './Title';
import ItemCount from '../ItemCount';
import ItemList from "../ItemList";

const films = [
    { id: 1, image: "https://balanzas-ohaus.com/wp-content/uploads/2019/11/01-AX124.jpeg", title: "Balanza ohause" },
    { id: 2, image: "http://www.prec.ar/wp-content/uploads/2022/05/ANCLAJES-yaccesorios.jpg", title: "celda de carga" },
    { id: 3, image: "http://www.prec.ar/wp-content/uploads/2022/02/TRACCION.jpg", title: "celda de traccion" }
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getdata = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        getdata.then(res => setData(res));
    }, [setData]);

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;