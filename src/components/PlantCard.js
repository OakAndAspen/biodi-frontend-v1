import React from 'react';
import "./PlantCard.css";

export default class PlantCard extends React.Component {
    render() {
        return (
            <div className="PlantCard card col-sm-4" data-id={this.props.plant}
                 onClick={this.props.onClickCard} key={this.props.plant}>
                <img src="https://blog.interflora.fr/wp-content/uploads/2016/05/Entretien-bouquet-de-fleurs.jpg"
                     alt={"Photo de " + this.props.name} className="card-img-top"/>
                <h2 className="card-title">{this.props.plant.name}</h2>
                <p className="card-body">Argent - Temps - Saison</p>
                <p className="card-body">Attire : </p>
            </div>
        );
    }
}

