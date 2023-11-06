import Item from '../Item/item';
import React from 'react';

const ItemList = ({data = {}}) => {
    return (
        data.map(film => <Item key= {film.id} info={film} />)
    )
}

export default ItemList;
