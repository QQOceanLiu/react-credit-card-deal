import React from 'react';
import { Link } from 'react-router-dom';

const DealDetailPage = () => (
    <div>
        <div>
            this deal is really good!
        </div>
        <Link to={"/"}>
            <h4>Back</h4> 
        </Link>
    </div>
);

export default DealDetailPage;