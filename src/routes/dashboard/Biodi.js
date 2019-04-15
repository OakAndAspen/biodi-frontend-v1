import React from 'react';
import Config from "../../Config";
import DashboardLayout from "../../DashboardLayout";
import {Link} from "react-router-dom";

export default class Biodi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DashboardLayout>
                <div className="w-100 h-100 container overflow-auto">
                    <div className="row my-4">
                        <div className="col-12 col-md-6 ml-auto">
                            <img src={Config.imgFolder + "/biodi-gris.png"}
                                 alt="Biodi-vers-City" className="img-fluid my-4"/>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-12 col-md-6 text-justify">
                            <h2>À propos de Biodi-vers-City</h2>
                            <p>Biodi-vers-City est un projet du département COMEM de l’HEIG-VD supporté par BirdLife
                                Suisse.</p>

                            <p>Ce projet a pour mission de promouvoir la biodiversité dans les milieux urbains. Cette
                                action se concentre sur les particuliers en encourageant l’aménagement des balcons et
                                bords de fenêtres, mais aussi des jardins et espaces verts communs.</p>

                            <p>Le terme <i>biodiversité</i> englobe tout le vivant, en d’autres termes la flore et la
                                faune. Ce projet encourage l’installation de fleurs et de plantes ainsi que divers
                                habitats pour les insectes et les petits animaux.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Customisez votre balcon</h5>
                                    <p className="card-text text-justify">Sur <b>l'application</b>, créez votre balcon et découvrez
                                        comment le rendre plus accueillant pour la biodiversité! Ajoutez des plantes et
                                        des constructions permettant à la faune et la flore de s'y épanouir. Rapportez
                                        des points à votre quartier en créant des balcons et en participant sur le
                                        forum, afin qu'il devienne le quartier le plus vert de Biodi-vers-City!</p>
                                    <Link to="/dashboard" className="btn btn-success w-100">
                                        Voir mes balcons
                                    </Link>
                                </div>
                            </div>
                            <div className="card my-3">
                                <div className="card-body">
                                    <h5 className="card-title">Partagez votre expérience</h5>
                                    <p className="card-text text-justify">Sur <b>le forum</b>, partagez votre expérience
                                        et vos questions avec d'autres citoyens de Biodi-vers-City. Des membres de
                                        BirdLife pourront également vous donner une opinion professionnelle sur vos
                                        aménagements, qu'ils soient sur votre balcon, sur vos bords de fenêtres ou dans
                                        votre jardin.</p>
                                    <a href="https://forum.biodi-vers-city-ch" className="btn btn-success w-100">
                                        Aller sur le forum
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        );
    }
}
