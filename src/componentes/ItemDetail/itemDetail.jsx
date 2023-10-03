import React from 'react';
import "./itemDetail.css"

const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail__img" src={data.image} alt="" />
            </div>
            <div className="content">
                <h1>{data.title}</h1>
            </div>
        </div>
    );
}

export default ItemDetail;
