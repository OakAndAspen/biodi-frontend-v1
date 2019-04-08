import React from 'react';

export default class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <form className="p-4">
                <h1>Mon compte</h1>
                <h2 className="mt-4">Modifier les informations de base</h2>
                <div className="row">
                    <div className="col-6 py-1">
                        <input type="text" className="form-control" placeholder="Prénom"/>
                    </div>
                    <div className="col-6 py-1">
                        <input type="text" className="form-control" placeholder="Nom"/>
                    </div>
                    <div className="col-12 py-1">
                        <input type="text" className="form-control" placeholder="Adresse email"/>
                    </div>
                    <div className="col-12 py-1">
                        <input type="text" className="form-control" placeholder="Nom d'utilisateur"/>
                    </div>
                </div>

                <h2 className="mt-4">Modifier le mot de passe</h2>
                <div className="row">
                    <div className="col-6 py-1">
                        <input type="text" className="form-control" placeholder="Mot de passe"/>
                    </div>
                    <div className="col-6 py-1">
                        <input type="text" className="form-control" placeholder="Répéter le mot de passe"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <button className="btn btn-success w-100">Enregistrer</button>
                    </div>
                </div>
            </form>
        );
    }
}
