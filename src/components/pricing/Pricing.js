import React from 'react';
import CardPricing from './CardPricing'

const Pricing = () => {
    return (
        <div id="pricing" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="text col-12">
                        <div className="row pricing">
                            <h2>Tarifs</h2>
                        </div>
                        <div className="row pricing">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloremque eius enim esse,
                                fuga illum in ipsam labore nemo nisi possimus quas quo repellendus sit tempore temporibus
                                voluptas? Provident, rerum.</p>
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
            </div>
        </div>

    );
}

export default Pricing;