import React from 'react'
import {OrderPricing} from "./CardPricing";

const TabsPricing = props => {
    return (
        <div>
            <h3 className="format text-center mt-3">{props.format}</h3>
            <p className="pricing mt-5 text-center">{props.pricing}</p>
            <p className="subscription text-center">{props.subscription}</p>
            <div className="fonction text-center tab-fonction">
                <p className="presentation">{props.user}</p>
                <p className="presentation">{props.equipment}</p>
                <p className="presentation">{props.details}</p>
            </div>
            <OrderPricing message={props.message}/>
        </div>
    )
};

export default TabsPricing;