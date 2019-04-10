import React from 'react';
import "./PlantCard.css";
import Config from "../Config";

export default class PlantCard extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="PlantCard">
                <img src="photodelaplante" alt="nomdelaplante"/>
                <h2>Nom de la plante</h2>
                <p>Argent - Temps - Saison</p>
                <p>Attire : </p>
            </div>
        );
    }
}


