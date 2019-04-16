import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import Config from "../../Config";
import $ from "jquery";

export default class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password1: "",
            password2: "",
            error: null,
            success: null
        };

        this.messages = {
            emptyField: "L'adresse email est obligatoire.",
            emptyPWField: "Les deux champs sont obligatoires pour changer le mot de passe.",
            passwordsDontMatch: "Les mots de passe ne correspondent pas.",
            updatedInfo: "Les informations ont bien été modifiées."
        };

        this.send = this.send.bind(this);
    }

    componentDidMount() {
        $.ajax({
            method: "GET",
            url: Config.apiUrl + '/wp/v2/users/me?context=edit',
            context: this
        }).done(data => {
            this.setState({
                firstName: data.first_name,
                lastName: data.last_name,
                email: data.email,
                userName: data.username
            });
        }).fail(() => {
            alert("Il y a eu un souci lors de la récupération de vos données. Essayez de vous reconnecter.")
        });
    }

    send() {
        let data = {
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.email
        };

        if (!data.email) {
            this.setState({error: this.messages.emptyField});
            return null;
        }

        if (this.state.password1 || this.state.password2) {
            if (!this.state.password1 || !this.state.password2) {
                this.setState({error: this.messages.emptyPWField});
                return null;
            }
            if (this.state.password1 !== this.state.password2) {
                this.setState({error: this.messages.passwordsDontMatch});
                return null;
            }
            data.password = this.state.password1;
        }

        this.setState({error: null});

        $.ajax({
            method: "POST",
            url: Config.apiUrl + '/wp/v2/users/me',
            context: this,
            data: JSON.stringify(data)
        }).done(() => {
            this.setState({success: this.messages.updatedInfo});
        });
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
                                   value={this.state.userName} disabled={true}/>
                        </div>
                        <div className="col-12 pt-2">
                            <h2>Modifier le mot de passe</h2>
                        </div>
                        <div className="col-12 col-sm-6 py-2">
                            <input type="password" className="form-control" placeholder="Nouveau mot de passe"
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
