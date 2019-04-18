import React from 'react';
import Config from "../../Config";
import DashboardLayout from "../../components/DashboardLayout";
import {Link} from "react-router-dom";

export default class Supply extends React.Component {

    render() {
        let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat consequat eros, " +
            "id gravida leo hendrerit vel. Pellentesque laoreet auctor dapibus. Maecenas purus quam, dignissim " +
            "eu placerat at, venenatis eu enim. Curabitur facilisis risus vitae elit tincidunt interdum. Sed vel " +
            "laoreet nisl.";
        let recommendations = [
            {
                name: "Magasin truc",
                website: "magasin-truc.ch",
                address: "Rue du trucmachinbidule 3, 1400 Lausanne",
                phone: "021 321 32 32",
                description: lorem
            },
            {
                name: "Magasin chose",
                address: "Rue des trucs 45, 1900 Goumoens-le-Jus",
                phone: "021 321 32 32",
                description: lorem
            },
            {
                name: "Magasin truc",
                website: "magasin-truc.ch",
                address: "Rue du Machin 5, 1800 Vevey",
                description: lorem
            },
            {
                name: "Magasin truc",
                website: "magasin-truc.ch",
                phone: "021 321 32 32",
                description: lorem
            },
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
