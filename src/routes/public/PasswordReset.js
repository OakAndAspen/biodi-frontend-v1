import React from 'react';
import Config from "../../Config";
import {Link} from "react-router-dom";
import $ from "jquery";

export default class PasswordReset extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            message: false
        };

        this.send = this.send.bind(this);
    }

    send() {
        if (!this.state.userName) return null;

        let data = {
            user_login: this.state.userName
        };

        $.ajax({
            method: "POST",
            url: Config.apiUrl + '/wp/v2/users/lostpassword',
            data: JSON.stringify(data),
            context: this
        }).done(() => {
            this.setState({message: "Un nouveau mot de passe a été envoyé à votre adresse email!"});
        }).fail(() => {
            this.setState({message: "Oups! Ce nom d'utilisateur n'est pas valable."});
        });
    }

    render() {
        return (
            <div className="container h-100">
                <div className="row">
                    <form className="col-12 col-md-6 col-lg-4 mx-auto text-center">
                        <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City"
                             className="text-center img-fluid my-4"/>
                        <h3 className="text-center text-light my-4">Récupération du mot de passe</h3>
                        <input type="text" placeholder="Nom d'utilisateur" className="form-control my-2"
                               onChange={e => this.setState({userName: e.target.value})}/>
                        <small className="text-muted">Un nouveau mot de passe sera envoyé à votre adresse email.</small>
                        <button type="button" className="btn btn-success w-100 my-2" onClick={this.send}>
                            Envoyer
                        </button>
                        {this.state.message && <div className="alert alert-light">{this.state.message}</div>}
                        <small className="align-self-center"><Link to="/login">
                            <i className="fas fa-angle-double-left mr-1"/>
                            Retour à la page de connexion
                        </Link></small>
                    </form>
                </div>
            </div>
        );
    }
}
