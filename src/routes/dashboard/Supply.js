import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";

export default class Supply extends React.Component {

    render() {
        let recommendations = [
            {
                name: "L’autre jardin",
                website: "www.lautrejardin.ch",
                address: "Au village 28, 1721 Cormérod",
                phone: "079 301 12 51"
            },
            {
                name: "Pépinière Baudat SA",
                website: "www.baudat.ch",
                address: "Ch. de Camarès 1, 1032 Vernand-sur-Lausanne",
                phone: "021 731 13 66"
            },
            {
                name: "Pépinière de Genolier",
                website: "www.pepinieredegenolier.ch",
                address: "Rte de Trélex 29, 1272 Genolier",
                phone: "022 366 14 80"
            },
            {
                name: "Pépinière du Gros de Vaud",
                website: "www.pepinieres-foret.ch",
                address: "Ch. de la Pépinière 4, CP 47, 1040 Echallens"
            }
        ];

        return (
            <DashboardLayout>
                <div className="w-100 h-100 container overflow-auto">
                    <div className="row my-4">
                        <div className="col-12 text-justify">
                            <h1>Où me fournir?</h1>
                            <p>Il peut être difficile de savoir où trouver des plantes, du matériel et autres
                                fournitures de bonne qualité et/ou à un bon prix. Vous trouverez ici les fournisseurs
                                recommandés par BirdLife. Bon balcon-hacking!</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        {recommendations.map(r => this.renderCard(r))}
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    renderCard(r) {
        return (
            <div className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">{r.name}</h5>
                        <p className="card-text text-justify">{r.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {r.website && <li className="list-group-item">
                            <i className="fas fa-external-link-alt mr-2"/>
                            <a href={r.website}>{r.website}</a>
                        </li>}
                        {r.address && <li className="list-group-item">
                            <i className="fas fa-envelope mr-2"/>
                            {r.address}
                        </li>}
                        {r.phone && <li className="list-group-item">
                            <i className="fas fa-phone mr-2"/>
                            {r.phone}
                        </li>}
                    </ul>
                </div>
            </div>
        );
    }
}
