import React from 'react'
import Step from './Step.js';

const Concept = () => {
    return (
        <div id="concept" className="row">
            <div className="col-xs-12 my-auto">
                <h2>Le Concept</h2>
                <p>Il vous suffit de manger 5 fruits et légumes.</p>
                <div className="steps">
                    <div className="row">
                        <Step img="/images/penguin.png"
                            number={1} title={'Je choisis mon format'}
                            description={'Eo adducta re per Isauriam, rege Persarum bellis finitimis inligato repellenteque a conlimitiis suis ferocissimas gentes, quae mente quadam versabili hostiliter eum saepe incessunt et in nos arma moventem aliquotiens iuvant, Nohodares quidam nomine e numero Atchoum.'} />
                    </div>
                    <div className="row">
                        <Step img="/images/penguin.png"
                            number={2} title={'Les participants s\'inscrivent'}
                            description={'Eo adducta re per Isauriam, rege Persarum bellis finitimis inligato repellenteque a conlimitiis suis ferocissimas gentes, quae mente quadam versabili hostiliter eum saepe incessunt et in nos arma moventem aliquotiens iuvant, Nohodares quidam nomine e numero Atchoum.'} />
                    </div>
                    <div className="row">
                        <Step img="/images/penguin.png"
                            number={3} title={'Le jour J, je lance l\'appli'}
                            description={'Eo adducta re per Isauriam, rege Persarum bellis finitimis inligato repellenteque a conlimitiis suis ferocissimas gentes, quae mente quadam versabili hostiliter eum saepe incessunt et in nos arma moventem aliquotiens iuvant, Nohodares quidam nomine e numero Atchoum.'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Concept;
