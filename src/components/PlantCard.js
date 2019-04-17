import React from 'react';
import "./PlantCard.css";

export default class PlantCard extends React.Component {
    render() {
         const stylesImg = {
            backgroundImage: 'url(' + this.props.plant.img + ')',
        }
        return (
            <div className="PlantCard card col-sm-4" data-id={this.props.plant}
                 onClick={this.props.onClickCard} key={this.props.plant}>
                <div style={stylesImg}
                     alt={"Photo de " + this.props.plant.name} className="card-img-top imgPlantCard">
                </div>
                <h2 className="card-title">{this.props.plant.name}</h2>
                <p className="card-body"> {this.props.plant.initialBudget}/5 $ - {this.props.plant.initialTime}/5 <i className="far fa-clock"></i></p>
                <p className="card-body">Attire : {this.props.plant.favorising} </p>
            </div>
        );
    }
}

