import React from 'react';
import CardPricing from './CardPricing'

const Pricing = () => {
    return (
        <div id="pricing" className="row">
            <div className="text">
                <div className="row">
                    <h2>Tarifs</h2>
                </div>
                <div className="row">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloremque eius enim esse, fuga illum in ipsam labore nemo nisi possimus quas quo repellendus sit tempore temporibus voluptas? Provident, rerum.</p>
                </div>
            </div>
            <CardPricing
                format="EXPO"
                title="Speed meeting"
                details="Idéal lorsque vous souhaitez que tout .........."
                pricing="20"
            />
            <CardPricing
                format="EXPO"
                title="Speed meeting"
                details="Idéal lorsque vous souhaitez que tout .........."
                pricing="20"
            />
            <CardPricing
                format="EXPO"
                title="Speed meeting"
                details="Idéal lorsque vous souhaitez que tout .........."
                pricing="20"
            />
        </div>
    );
}

export default Pricing;