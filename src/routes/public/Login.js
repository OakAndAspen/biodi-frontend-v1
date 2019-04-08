import React from 'react';
import Config from "../../Config";
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.send = this.send.bind(this);
    }

    send() {
        let data = this.state;
        this.props.history.push("/dashboard");
        $.ajax({
            method: "POST",
            url: Config.apiUrl + '/users',
            context: this,
            data: data
        }).done((data) => {
            console.log(data);
        });
    }

    render() {
        return (
            <div className="container h-100">
                <div className="row">
                    <form className="col-12 col-md-6 col-lg-4 mx-auto">
                        <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City"
                             className="text-center img-fluid my-4"/>
                        <input type="text" placeholder="Adresse email" className="form-control my-2"
                               onChange={e => this.setState({email: e.target.value})}/>
                        <input type="password" placeholder="Mot de passe" className="form-control my-2"
                               onChange={e => this.setState({password: e.target.value})}/>
                        <button type="button" className="btn btn-success w-100 my-2" onClick={this.send}>
                            Connexion
                        </button>
                        <span className="text-secondary">Pas encore de compte?
                            <Link to="/" className="ml-1">Choisissez votre quartier.</Link>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}
