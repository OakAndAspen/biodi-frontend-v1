import React from 'react';
import "./Map.css";
import Config from "../Config";

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
            emptyField: "Tous les champs sont obligatoires.",
            passwordsDontMatch: "Les mots de passe ne correspondent pas."
        };

        this.send = this.send.bind(this);
    }

    send() {
        let data = this.state;
        delete data.success;
        delete data.error;

        if (!data.firstName || !data.lastName || !data.email || !data.userName || !data.password1 || !data.password2) {
            this.setState({error: this.messages.emptyField});
            return null;
        }

        if (data.password1 !== data.password2) {
            this.setState({error: this.messages.passwordsDontMatch});
            return null;
        }

        this.setState({error: null});

        console.log("Sending: ", data);

        /*$.ajax({
            method: "PATCH",
            url: Config.apiUrl + '/users',
            context: this,
            data: data
        }).done((data) => {
            console.log(data);
        });*/

        this.setState({success: this.messages.updatedInfo});
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
                                <input type="text" className="form-control" placeholder="Mot de passe"
                                       value={this.state.password1}
                                       onChange={e => this.setState({password1: e.target.value})}/>
                            </div>
                            <div className="col-12 col-sm-6 py-2">
                                <input type="text" className="form-control" placeholder="Répéter le mot de passe"
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
                                <button type="button" className="btn btn-success w-100" onClick={this.send}>
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
