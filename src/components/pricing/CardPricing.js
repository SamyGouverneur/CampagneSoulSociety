import React from 'react';

const CardPricing = (props) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 section_pricing">
            <div className="card pricing_card mt-3">
                <div className="card-body">
                    <h3 className="format text-center mt-3">{props.format}</h3>
                    <p className="pricing mt-5 text-center">{props.pricing}</p>
                    <p className="subscription text-center">{props.subscription}</p>
                    <div className="fonction">
                        <p className="presentation mt-5">{props.user}</p>
                        <p className="presentation">{props.equipment}</p>
                        <p className="presentation">{props.details}</p>
                    </div>
                    <OrderPricing/>
                </div>
            </div>
        </div>
    );
}

const OrderPricing = () => {
    return (
        <div className="plus text-center mt-5">
            <a href="#contact" className="mt-5">+</a>
        </div>
    );
}

export default CardPricing;