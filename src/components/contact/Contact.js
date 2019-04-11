import React, {Component} from 'react'

export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.name.length < 3) {
            this.setState({
                errorName: '3 caractères minimum requis',
            })
        } else if (!this.state.name.match("^([a-z A-Z ,.'-])*$")) {
            this.setState({
                errorName: 'Caractères spéciaux autorisés : , . \' -',
            })
        } else {
            this.setState({
                errorName: '',
            })
        }

        if (!this.state.email.match("^[\\w.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")) {
            this.setState({
                errorEmail: 'Adresse email non valide',
            })
        } else {
            this.setState({
                errorEmail: '',
            })
        }

        if (this.state.message.length < 10) {
            this.setState({
                errorMessage: '10 caractères minimum requis',
            })
        } else {
            this.setState({
                errorMessage: '',
            })
        }
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});

    };

    render() {
        return (
            <div id="contact">
                <div className="col my-auto">
                    <h2 className="text-center">Contact</h2>
                    <p className="text-center mb-5">Formulaire de contact. Chouette.</p>
                    <form onSubmit={this.handleSubmit} className="mx-auto">
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
