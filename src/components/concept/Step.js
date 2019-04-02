import React from 'react'

const Step = (props) => {

    let stepElt = ""

    let illuElt = <div>
        <img className="img-fluid" src={props.img} />
    </div>;

    let descElt = <div>
        <h3>{props.number}</h3>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
    </div>;

    if (props.number % 2 !== 0) {
        stepElt = <div className="row">
            <div className="illustration col-4 my-auto">
                {illuElt}
            </div>
            <div className="col-8 my-auto">
                {descElt}
            </div>
        </div>
    } else {
        stepElt = <div className="row">
            <div className="col-8 my-auto">
                {descElt}
            </div>
            <div className="illustration col-4 my-auto">
                {illuElt}
            </div>
        </div>
    }

    return (
        <div>
            {stepElt}
        </div>

    )
}
export default Step;
