import React from 'react';
import "./Map.css";
import Config from "../Config";
import $ from "jquery";
import {Link} from "react-router-dom";

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            userName: "",
            password1: "",
            password2: "",
            newsletter: true,
            error: null,
            showMessage: false
        };

        this.messages = {
            emptyField: "L'adresse email, le nom d'utilisateur et le mot de passe sont obligatoires.",
            passwordsDontMatch: "Les mots de passe ne correspondent pas.",
            userExists: "Cette adresse email ou ce nom d'utilisateur existent déjà."
        };

        this.register = this.register.bind(this);
    }

    checkErrors() {
        if (!this.state.email || !this.state.userName || !this.state.password1 || !this.state.password2) {
            this.setState({error: this.messages.emptyField});
            return false;
        }
        if (this.state.password1 !== this.state.password2) {
            this.setState({error: this.messages.passwordsDontMatch});
            return false;
        }
        this.setState({error: null});
        return true;
    }

    register() {
        if (!this.checkErrors()) return null;

        let data = {
            username: this.state.userName,
            email: this.state.email,
            password: this.state.password1,
            meta: {
                neighbourhood: this.props.neighbourhood,
                newsletter: this.state.newsletter ? 1 : 0
            }
        };

        $.ajax({
            url: Config.apiUrl + '/wp/v2/users/register',
            method: "POST",
            data: JSON.stringify(data),
            context: this
        }).done(res => {
            if (res.code === 200) this.login();
        }).fail(() => {
            this.setState({error: this.messages.userExists});
        });
    }

    login() {
        let data = {
            username: this.state.userName,
            password: this.state.password1
        };

        $.ajax({
            method: "POST",
            url: Config.apiUrl + '/jwt-auth/v1/token',
            data: JSON.stringify(data),
            context: this
        }).done(res => {
            if (res.token) {
                localStorage.setItem("authKey", res.token);
                this.setState({showMessage: true});
            }
        });
    }

    render() {
        const mainStyle = {
            zIndex: 100,
            backgroundColor: Config.colors.biodiDarkBlue,
            display: this.props.show ? "inherit" : "none",
        };

        const closeIconStyle = {
            fontSize: "20px",
            float: "right",
            cursor: "pointer"
        };

        return (
            <div style={mainStyle} className="p-4 h-100 w-100 position-fixed overflow-auto">
                <i className="fas fa-times text-light" onClick={this.props.onClose}
                   style={closeIconStyle} title="Fermer"/>
                <div className="row">
                    {this.state.showMessage ? this.renderRegisterMessage() : this.renderForm()}
                </div>
            </div>
        );
    }

    renderForm() {
        return (
            <form className="col-12 col-lg-6 mx-auto p-4">
                <h1 className="text-light text-center">Inscrivez-vous en quelques clics!</h1>
                <div className="row">
                    <div className="col-12 py-2">
                        <input type="text" className="form-control" placeholder="Adresse email"
                               value={this.state.email}
                               onChange={e => this.setState({email: e.target.value})}/>
                    </div>
                    <div className="col-12 py-2">
                        <input type="text" className="form-control" placeholder="Nom d'utilisateur"
                               value={this.state.userName}
                               onChange={e => this.setState({userName: e.target.value})}/>
                    </div>
                    <div className="col-12 col-sm-6 py-2">
                        <input type="password" className="form-control" placeholder="Mot de passe"
                               value={this.state.password1}
                               onChange={e => this.setState({password1: e.target.value})}/>
                    </div>
                    <div className="col-12 col-sm-6 py-2">
                        <input type="password" className="form-control" placeholder="Répéter le mot de passe"
                               value={this.state.password2}
                               onChange={e => this.setState({password2: e.target.value})}/>
                    </div>
                    <div className="col-12 py-2">
                        <input type="checkbox" checked={this.state.newsletter}
                               onChange={e => this.setState({newsletter: e.target.checked})}/>
                        <span className="text-light ml-2">
                            J'accepte de recevoir la newsletter de BirdLife Suisse !
                        </span>
                    </div>
                </div>
                {this.state.error && (
                    <div className="row py-2">
                        <div className="col-12">
                            <div className="alert alert-danger w-100">{this.state.error}</div>
                        </div>
                    </div>
                )}
                <div className="row mt-2">
                    <div className="col-12">
                        <button type="button" className="btn btn-success w-100" onClick={this.register}>
                            C'est parti !
                        </button>
                    </div>
                </div>
            </form>
        );
    }

    renderRegisterMessage() {
        return (
            <div className="col-12 col-md-8 col-lg-6 mx-auto text-light text-center">
                <h1 className="text-light">En route pour la Biodi-vers-City !</h1>
                <h3 className="text-light">Bienvenue dans une ville grise, triste, qui a besoin de vous pour être la
                    plus verte !</h3>
                <p>Félicitations ! En vous inscrivant, vous venez de faire gagner 30 points à votre quartier dans une
                    compétition entre les cinq quartiers de Lausanne pour être le plus bio-divers de la ville.</p>
                <p>Ici, vous pourrez imaginer vos balcons respectant le plus la biodiversité et vous informer sur
                    comment le construire et l'entretenir. Ce projet est une initiative de BirdLife, qui oeuvre pour la
                    préservation des espèces naturelles, de plus en plus menacées par notre urbanisation excessive. Il
                    est temps d’agir, et chaque geste compte. En espérant vous aider à trouver quel geste
                    réaliser, bonne visite de Biodi-vers-City !</p>
                <Link className="btn btn-primary w-100 my-3" to="/dashboard">Continuer</Link>
            </div>
        );
    }
}