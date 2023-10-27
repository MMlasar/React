import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';

const films = [
    { id: 1,price:19000, image: "https://balanzas-ohaus.com/wp-content/uploads/2019/11/01-AX124.jpeg", title: "Balanza ohause" },
    { id: 2, price:14000,image: "http://www.prec.ar/wp-content/uploads/2022/05/ANCLAJES-yaccesorios.jpg", title: "celda de carga" },
    { id: 3, price:12000,image: "http://www.prec.ar/wp-content/uploads/2022/02/TRACCION.jpg", title: "celda de traccion" } ]

export const ItemDetailContainer = () => {

    const [data , setData ]= useState({})
    const {detalleId} = useParams();

    useEffect(() => {
        const getdata = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        getdata.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [detalleId]);

    return (
        <ItemDetail data = {data} />
    )
}

export default ItemDetailContainer;
