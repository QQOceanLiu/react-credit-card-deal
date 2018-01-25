import React from 'react';
import { Link } from 'react-router-dom';

const DealItem = ({ id, description, card, validTime, merchant, tags }) => (
    <div> 
        <Link to={`/deal/${id}`}>
            <h3>Detail</h3>
        </Link>
        <div>
            <p> credit card: {card} </p>
            <p> deal message: {description} </p>
            <p> valid time: {validTime} </p> 
            <p> merchant: {merchant} </p>
            <p> tag: {tags} </p>
        </div>
    </div>
);

export default DealItem;
