import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length<3) {
            this.setState({
                errorName: '3 caractères minimum requis',
            })
        }
        else if(!this.state.name.match("^([a-z A-Z ,.'-])*$")) {
            this.setState({
                errorName: 'Caractères spéciaux autorisés : , . \' -',
            })
        }
        else {
            this.setState({
                errorName: '',
            })
        }

        if(!this.state.email.match("^[\\w.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")) {
            this.setState({
                errorEmail: 'Adresse email non valide',
            })
        }
        else {
            this.setState({
                errorEmail: '',
            })
        }

        if(this.state.message.length<10) {
            this.setState({
                errorMessage: '10 caractères minimum requis',
            })
        }
        else {
            this.setState({
                errorMessage: '',
            })
        }

    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleMailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <div id="contact">
                    <div className="col-md-8 offset-md-2 my-auto">
                        <h2>Contact</h2>
                        <p>Formulaire de contact. Chouette.</p>
                        <div className="contact_form justify-content-center">
                            <form onSubmit={this.handleSubmit} className="col-md-6 offset-md-3 mt-5">

                                <div className="row no-gutters errorMessage">{this.state.errorName}</div>
                                <div className="form-group row no-gutters">
                                    <input className="" type="text" name="name" placeholder="Nom"
                                    onChange={this.handleNameChange} value={this.state.name} />
                                </div>

                                <div className="row no-gutters errorMessage">{this.state.errorEmail}</div>
                                <div className="form-group row no-gutters">
                                    <input className="" type="text" name="email" placeholder="Email"
                                    onChange={this.handleMailChange} value={this.state.email} />
                                </div>

                                <div className="row no-gutters errorMessage">{this.state.errorMessage}</div>
                                <div className="form-group row no-gutters">
                                    <textarea type="text" name="message" placeholder="Message" rows="10"
                                    onChange={this.handleMessageChange} value={this.state.message}></textarea>
                                </div>
                                <button className="button" type="submit" value="submit">Envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
