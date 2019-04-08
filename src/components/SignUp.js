import React from 'react';
import "./Map.css";
import Config from "../Config";

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const style = {
            height: "100%",
            width: "100%",
            position: "fixed",
            zIndex: 100,
            backgroundColor: Config.colors.biodiDarkBlue,
            display: this.props.show ? "inherit" : "none"
        };

        let closeIconStyle = {
            fontSize: "20px",
            float: "right",
            cursor: "pointer"
        };

        return (
            <div style={style} className="row">
                <i className="fas fa-times text-light p-4" onClick={this.props.onClose}
                   style={closeIconStyle} title="Fermer"/>
                <form className="col-12 col-lg-6 mx-auto p-4">
                    <h1 className="text-light text-center">Inscrivez-vous en quelques clics!</h1>
                    <div className="row">
                        <div className="col-6 py-2">
                            <input type="text" className="form-control" placeholder="Prénom"/>
                        </div>
                        <div className="col-6 py-2">
                            <input type="text" className="form-control" placeholder="Nom"/>
                        </div>
                        <div className="col-12 py-2">
                            <input type="text" className="form-control" placeholder="Adresse email"/>
                        </div>
                        <div className="col-12 py-2">
                            <input type="text" className="form-control" placeholder="Nom d'utilisateur"/>
                        </div>
                        <div className="col-6 py-2">
                            <input type="text" className="form-control" placeholder="Mot de passe"/>
                        </div>
                        <div className="col-6 py-2">
                            <input type="text" className="form-control" placeholder="Répéter le mot de passe"/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12">
                            <button className="btn btn-success w-100">C'est parti !</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
