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
            alert("a");
        }
        else {
            this.setState({
                errorName: '',
            })
        }

        if(this.state.email.length<3) {
            this.setState({
                errorEmail: '3 caractères minimum requis',
            })
        }
        else {
            this.setState({
                errorEmail: '',
            })
        }

        if(this.state.message.length<3) {
            this.setState({
                errorMessage: '3 caractères minimum requis',
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
                <div id="contact" className="row">
                    <div className="col-xs-12 my-auto">
                        <h2>Contact</h2>
                        <p>Formulaire de contact. Chouette.</p>
                        <div className="contact_form text-center">
                            <form onSubmit={this.handleSubmit}>

                                <div className="row no-gutters errorMessage">{this.state.errorName}</div>
                                <div className="form-group row no-gutters">
                                    <input className="" type="text" name="name" placeholder="Nom"
                                    onChange={this.handleNameChange} value={this.state.name} />
                                </div>

                                <div className="row no-gutters errorMessage">{this.state.errorEmail}</div>
                                <div className="form-group row no-gutters">
                                    <input className="" type="mail" name="email" placeholder="Email"
                                    onChange={this.handleMailChange} value={this.state.email} />
                                </div>

                                <div className="row no-gutters errorMessage">{this.state.errorMessage}</div>
                                <div className="form-group row no-gutters">
                                    <textarea className="
                                    " type="text" name="message" placeholder="Message"
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
