import React from 'react';
import $ from "jquery";
import Config from "../../Config";
import DashboardLayout from "../../DashboardLayout";

export default class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            oldPassword: "",
            password1: "",
            password2: "",
            error: null,
            success: null
        };

        this.messages = {
            emptyField: "Les champs concernant les informations de base ne peuvent pas être vides.",
            emptyPWField: "Les trois champs sont obligatoires pour changer le mot de passe.",
            passwordsDontMatch: "Les mots de passe ne correspondent pas.",
            updatedInfo: "Les informations ont bien été modifiées."
        };

        this.send = this.send.bind(this);
    }

    send() {
        let data = this.state;
        delete data.success;
        delete data.error;

        if (!data.firstName || !data.lastName || !data.email || !data.userName) {
            this.setState({error: this.messages.emptyField});
            return null;
        }

        if (data.oldPassword || data.password1 || data.password2) {
            if (!data.oldPassword || !data.password1 || !data.password2) {
                this.setState({error: this.messages.emptyPWField});
                return null;
            }
            if (data.password1 !== data.password2) {
                this.setState({error: this.messages.passwordsDontMatch});
                return null;
            }
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
        return (
            <DashboardLayout>
                <form className="container overflow-auto h-100 pt-4">
                    <div className="row">
                        <div className="col-12">
                            <h1>Mon compte</h1>
                            <h2>Modifier les informations de base</h2>
                        </div>
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
                        <div className="col-12 pt-2">
                            <h2>Modifier le mot de passe</h2>
                        </div>
                        <div className="col-12 py-2">
                            <input type="text" className="form-control" placeholder="Ancien mot de passe"
                                   value={this.state.oldPassword}
                                   onChange={e => this.setState({oldPassword: e.target.value})}/>
                        </div>
                        <div className="col-12 col-sm-6 py-2">
                            <input type="text" className="form-control" placeholder="Nouveau mot de passe"
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
                    <div className="row py-2">
                        <div className="col-12">
                            <button type="button" className="btn btn-success w-100" onClick={this.send}>
                                Enregistrer
                            </button>
                        </div>
                    </div>
                    {this.state.success && (
                        <div className="row py-2">
                            <div className="col-12">
                                <div className="alert alert-success w-100">{this.state.success}</div>
                            </div>
                        </div>
                    )}
                </form>
            </DashboardLayout>
        );
    }
}
