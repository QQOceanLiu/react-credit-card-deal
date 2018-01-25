import React from 'react';
import { connect } from 'react-redux';
import DealItem from './DealItem';

const DealList = (props) => (
    <div>
        {
            props.deals.map((deal) => {
                return <DealItem key={deal.id} {...deal} />;
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        deals: state.deals
    };
};

export default connect(mapStateToProps)(DealList);