import React from 'react';

const CardPricing = (props) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 section_pricing">
            <div className="card pricing_card mt-5">
                <div className="card-header mt-4">
                    <img className="img-responsive picture_pricing" src="/images/penguin.png" alt="picture"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title mt-3 text-center">{props.title}</h5>
                    <p className="card-text mt-5 text-center">{props.details}</p>
                    <p className="card-text mt-5 text-center pricing">{props.pricing} €</p>
                    <OrderPricing/>
                </div>
            </div>
        </div>
    );
}

const OrderPricing = () => {
    return (
        <div className="text-center mt-5">
            <a href="#" className="button mt-5">Commander</a>
        </div>
    );
}

export default CardPricing;