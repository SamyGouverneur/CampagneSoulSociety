import React from 'react'

const Medias = () => {
  return (
    <div id="medias">
      <Speakers />
      <Prices />
    </div>
  )
}

const Speakers = () => {
  return (
    <div id="speakers" className="col-md-10">
      <div className="col-md-8 offset-md-2">
        <h2>Ils parlent de nous !</h2>
        <p>Youpiiiiiiiiiiiii iiiiiii !</p>
        <div className="row mt-4">
            <div className="col-4 text-center">
                <img src="/images/france3.jpg" />
            </div>
            <div className="col-4 text-center">
                <img src="/images/la_rep.jpg" />
            </div>
            <div className="col-4 text-center">
                <img src="/images/la_tribune.jpg" />
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-4 text-center">
                <img src="/images/bfm.jpg" />
            </div>
            <div className="col-4 text-center">
                <img src="/images/france_bleu.jpg" />
            </div>
        </div>
      </div>
    </div>
  )
}

const Prices = () => {
  return (
    <div id="prices" className="col-md-10 offset-md-2">
      <div className="col-md-8 offset-md-2">
        <h2>On a gagnés des trucks !</h2>
        <p>On est les meilleurs, c'est tout !</p>
        <div className="row mt-4">
            <div className="col-4 text-center">
                <img src="/images/startup_weekend.jpg" />
            </div>
            <div className="col-4 text-center">
                <img src="/images/10000_startups.jpg" />
            </div>
            <div className="col-4 text-center">
                <img src="/images/human_tech_days.jpg" />
            </div>
        </div>
        <div className="row mt-4">

          <div className="col-4 text-center">
            <p>1er prix</p>
            <p>Startup Weekend</p>
            <p>(Bourges - 2016)</p>
          </div>
          <div className="col-4 text-center">
            <p>Lauréat catégorie</p>
            <p>Smart Building</p>
            <p>(CES Las Vegas - 2019)</p>
          </div>
          <div className="col-4 text-center">
            <p>Prix coup de coeur</p>
            <p>(Tours - 2019)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Medias;