import React from 'react';
import "./PlantCard.css";
import Config from "../Config";
import PropTypes from "prop-types";

export default class PlantCard extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {};
    }
    
      seeDetails(id) {
          /*$.ajax({
            method: "PATCH",
            url: Config.apiUrl + '/users',
            context: this,
            data: data
        }).done((data) => {
            console.log(data);
        });*/
          this.props.onClick();
         
        this.setState({
            visible : true,
            
        });
    }

    

    render() {
        return (
            <div className="PlantCard card col-sm-4" data-id={this.props.id} onClick={() => this.seeDetails(this.props.id)}>
                <img src="https://blog.interflora.fr/wp-content/uploads/2016/05/Entretien-bouquet-de-fleurs.jpg" alt={"Photo de "+ this.props.name} className="card-img-top"/>
                <h2 className="card-title">{this.props.name}</h2>
                <p className="card-body">Argent - Temps - Saison</p>
                <p className="card-body">Attire : </p>
            </div>
        );
    }
    
  
}

PlantCard.propTypes = {
  name: PropTypes.string.isRequired,
}



