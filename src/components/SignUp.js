import React from 'react';
import "./Map.css";
import Config from "../Config";
import $ from "jquery";

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password1: "",
            password2: "",
            error: null
        };

        this.messages = {
            emptyField: "L'adresse email, le nom d'utilisateur et le mot de passe sont obligatoires.",
            passwordsDontMatch: "Les mots de passe ne correspondent pas."
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
        if(!this.checkErrors()) return null;

        let data = {
            username: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password1,
            meta: {
                neighbourhood: this.props.neighbourhood
            }
        };

        $.ajax({
            url: Config.apiUrl + '/wp/v2/users/register',
            method: "POST",
            data: JSON.stringify(data),
            context: this
        }).done(res => {
            if(res.code === 200) this.login();
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
            if(res.token) {
                localStorage.setItem("authKey", res.token);
                this.props.history.push("/dashboard");
            }
        });
    }

    render() {
        const mainStyle = {
            zIndex: 100,
            backgroundColor: Config.colors.biodiDarkBlue,
            display: this.props.show ? "inherit" : "none"
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
                    <form className="col-12 col-lg-6 mx-auto p-4">
                        <h1 className="text-light text-center">Inscrivez-vous en quelques clics!</h1>
                        <div className="row">
                            <div className="col-12 col-sm-6 py-2">
                                <input type="text" className="form-control" placeholder="Prénom"
                                       value={this.state.firstName}
                                       onChange={e => this.setState({firstName: e.target.value})}/>
                            </div>
                            <div className="col-12 col-sm-6 py-2">
                                <input type="text" className="form-control" placeholder="Nom"
                                       value={this.state.lastName}
                                       onChange={e => this.setState({lastName: e.target.value})}/>
                            </div>
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
                </div>
            </div>
        );
    }
}
