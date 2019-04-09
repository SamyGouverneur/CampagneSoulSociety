import React from 'react'

const Home = () => {
    return (
        <div id="home" className="container-fluid bgColor d-flex align-items-center my-auto">

            <div className=" row no-gutters">
                <div className="text col-sm-8 col-xl-7 my-auto">
                    <div className="row no-gutters">
                        <h1>L'interphone nouvelle génération
                            qui s'adapte à votre mode de vie.</h1>
                    </div>
                    <div className="row no-gutters">
                        <p>Soyez joignable sur votre smartphone où que vous soyez,
                            vous ne manquerez plus jamais une livraison.</p>
                    </div>
                    <div className="row no-gutters mt-3">
                        <a className="button" href="#concept">Découvrir Bonjour+</a>
                    </div>
                </div>
                <div className="illustration ">
                    <img src="/images/home_illustration.png" />
                </div>
            </div>

        </div>
    )
}
export default Home;