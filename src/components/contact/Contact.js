import React, {Component} from 'react';
import 'animate.css';

export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
        const errors = {
            name: '',
            email: '',
            message: ''
        };
        if (this.state.name.length < 3) {
            errors.name = '3 caractères minimum requis';
        } else if (!this.state.name.match("^([a-z A-Z ,.'-])*$")) {
            errors.name = 'Caractères spéciaux autorisés : , . \' -';
        }

        if (!this.state.email.match("^[\\w.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")) {
            errors.email = 'Adresse email non valide';
        }

        if (this.state.message.length < 10) {
            errors.message = '10 caractères minimum requis';
        }

        const {name, email, message} = this.state;

        let state = {errors};

        if (!(errors.email || errors.message || errors.name)) {
            const flashError = {type: 'warning', message: 'Erreur lors de l\'envoi du mail.'};
            try {
                let response =
                    await fetch(`https://europe-west1-bonjour-plus-site-co.cloudfunctions.net/sendMail?name=${name}&email=${email}&message=${message}`);
                if (response.ok) {
                    state = {
                        ...state,
                        name: '',
                        email: '',
                        message: '',
                        flash: {type: 'success', message: 'Message envoyé avec succès.'}
                    };
                } else {
                    state.flash = flashError;
                }
            } catch (e) {
                this.setState({flash: flashError})
            }

        }
        this.setState(state);
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});

    };

    render() {
        return (
            <div id="contact" className="pt-5">
                <div className="col py-5 mt-5">
                    <h2 className="text-center mt-5">Contact</h2>
                    <p className="text-center mb-5">N'hésitez pas à nous contacter, notre équipe vous répond dans les
                        meilleurs délais.</p>
                    {this.state.flash && this.state.flash.message &&
                    <div className="row">
                        <div className={`col alert alert-${this.state.flash.type} alert-dismissible fade show mx-auto`} role="alert">
                            {this.state.flash.message}
                            <button type="button" className="close text-right" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    }
                    <form onSubmit={this.handleSubmit} className="mx-auto mb-5">
                        <div className="row no-gutters errorMessage">{this.state.errorName}</div>
                        <div className="row form-group no-gutters">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nom"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className="row no-gutters errorMessage">{this.state.errorEmail}</div>
                        <div className="row form-group no-gutters">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="row no-gutters errorMessage">{this.state.errorMessage}</div>
                        <div className="row form-group no-gutters">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="10"
                                onChange={this.handleChange}
                                value={this.state.message}
                            />
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <button className="button" type="submit" value="submit">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
