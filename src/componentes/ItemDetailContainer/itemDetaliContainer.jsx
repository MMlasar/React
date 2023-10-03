import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const films = [
    { id: 1, image: "https://balanzas-ohaus.com/wp-content/uploads/2019/11/01-AX124.jpeg", title: "Balanza ohause" }, ]

export const ItemDetailContainer = () => {

    const [data , setData ]= useState({})
    useEffect(() => {
        const getdata = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        getdata.then(res => setData(res));
    }, []);

    return (
        <ItemDetail data = {data} />
    )
}

export default ItemDetailContainer;
