import React from 'react';
import Config from "../../Config";
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: ""
        };

        this.send = this.send.bind(this);

        this.messages = {
            missingData: "Les deux champs sont obligatoires",
            loginIncorrect: "Le nom d'utilisateur ou le mot de passe est incorrect."
        };
    }

    checkErrors() {
        if (!this.state.userName || !this.state.password) {
            this.setState({error: this.messages.missingData});
            return false;
        }
        this.setState({error: null});
        return true;
    }

    send() {
        if (!this.checkErrors()) return null;

        let data = {
            username: this.state.userName,
            password: this.state.password
        };

        $.ajax({
            method: "POST",
            url: Config.apiUrl + '/jwt-auth/v1/token',
            data: JSON.stringify(data),
            context: this
        }).done(data => {
            localStorage.setItem("authKey", data.token);
            this.props.history.push("/dashboard");
        }).fail(() => {
            this.setState({error: this.messages.loginIncorrect})
        });
    }

    render() {
        return (
            <div className="container h-100">
                <div className="row">
                    <form className="col-12 col-md-6 col-lg-4 mx-auto">
                        <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City"
                             className="text-center img-fluid my-4"/>
                        <input type="text" placeholder="Nom d'utilisateur" className="form-control my-2"
                               onChange={e => this.setState({userName: e.target.value})}/>
                        <input type="password" placeholder="Mot de passe" className="form-control my-2"
                               onChange={e => this.setState({password: e.target.value})}/>
                        {this.state.error && (
                            <div className="alert alert-danger w-100">{this.state.error}</div>
                        )}
                        <button type="button" className="btn btn-success w-100 my-2" onClick={this.send}>
                            Connexion
                        </button>
                        <span className="text-secondary">
                            Pas encore de compte?
                            <Link to="/" className="ml-1">Choisissez votre quartier.</Link>
                            <br/>
                            Mot de passe oublié?
                            <Link to="/password-reset" className="ml-1">Récupérez le par email.</Link>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}
