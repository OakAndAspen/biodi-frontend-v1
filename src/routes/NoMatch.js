import React from 'react';
import {Link} from "react-router-dom";
import Config from "../Config";

export default class NoMatch extends React.Component {

    render() {
        return (
            <div className="p-4 h-100 w-100 overflow-auto text-center">
                <div className="row my-4">
                    <div className="col-12 col-md-6 mx-auto">
                        <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City" className="img-fluid"/>
                    </div>
                </div>
                <h1 className="text-secondary">Perdu ?</h1>
                <span className="text-secondary">
                    Cette page n'existe pas.
                    <Link to="/" className="ml-1">Retournez à la page d'accueil.</Link>
                </span>
            </div>
        );
    }
}
