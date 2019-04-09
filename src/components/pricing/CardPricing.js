import React from 'react';

const CardPricing = (props) => {

    return (
        <div className="col-lg-4 col-sm-12 section_pricing">
            <div className="card pricing_card mt-3">
                <div className="card-body">
                    <h3 className="format text-center mt-3">{props.format}</h3>
                    <p className="pricing mt-5 text-center">{props.pricing}</p>
                    <p className="subscription text-center">{props.subscription}</p>
                    <div className="fonction">
                        <p className="presentation">{props.user}</p>
                        <p className="presentation">{props.equipment}</p>
                        <p className="presentation">{props.details}</p>
                    </div>
                    <OrderPricing message={props.message} />
                </div>
            </div>
        </div>
    );
}

const OrderPricing = (props) => {
    return (
        <div className="plus text-center">
            <a href="#contact" onClick={ () => {
                document.getElementById('message').value = props.message;
                } }>+</a>
        </div>
    );
}

export default CardPricing;