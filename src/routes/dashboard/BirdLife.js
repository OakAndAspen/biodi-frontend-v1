import React from 'react';
import Config from "../../Config";
import DashboardLayout from "../../components/DashboardLayout";

export default class BirdLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DashboardLayout>
                <div className="w-100 h-100 container overflow-auto">
                    <div className="row my-4">
                        <div className="col-12 col-md-6 col-lg-4 ml-auto">
                            <img src={Config.imgFolder + "/birdlife.png"}
                                 alt="Biodi-vers-City" className="img-fluid my-4"/>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-12 col-md-6 text-justify">
                            <h2>À propos de BirdLife Suisse</h2>
                            <p>BirdLife Suisse est une association de <b>plus de 65’000 protecteurs de la nature et des
                                oiseaux</b>, actifs dans 440 sections locales, 18 associations cantonales et 2
                                organisations nationales.</p>

                            <p>BirdLife Suisse s’engage pour la protection de la nature, des oiseaux et de leurs
                                habitats. De plus, elle s’engage pour plus de nature dans le paysage, en particulier
                                dans les zones agricoles et en forêt. Elle mène des <b>projets concrets de protection
                                    pour les espèces et les sites menacés</b>.</p>

                            <p>BirdLife Suisse est partenaire de <b>BirdLife International</b>. Par cette
                                collaboration, BirdLife Suisse soutient des projets de protection de la nature dans le
                                monde entier, mais en particulier en Europe de l’Est et en Indonésie. La <b>protection
                                    des oiseaux migrateurs</b> sur leurs voies de migration est l’une de ses
                                préoccupations prioritaires.</p>

                            <p>Finalement, BirdLife Suisse travaille en collaboration étroite avec les autres grandes
                                organisations de protection de la nature comme le <b>WWF</b> et <b>Pro Natura</b> et les
                                organismes de recherche tels que la <b>Station ornithologique suisse</b> de Sempach et
                                diverses universités suisses.</p>
                        </div>
                        <div className="col-12 col-md-6 text-justify">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h5 className="card-title">Soutenir BirdLife</h5>
                                    <p className="card-text text-justify">
                                        Avez-vous aussi envie de protéger les oiseaux et la nature? Il y a plusieurs
                                        moyens de soutenir BirdLife:
                                    </p>
                                    <ul>
                                        <li>Devenez membre</li>
                                        <li>Faites un don</li>
                                        <li>Devenez bénévole</li>
                                    </ul>
                                    <a href="https://www.birdlife.ch/fr" className="btn btn-success w-100">
                                        Vers le site de BirdLife
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
