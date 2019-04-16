import React from 'react';
import "./PlantCard.css";
import Config from "../Config";
import PropTypes from "prop-types";

export default class PlantCard extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {};
        
        /*fetch(Config.apiUrl+'/v1/plants/'+this.props.match.params.id).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            balcony: result
          });
            console.log(result);
        },
        
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
            console.error(error);
        }
      )*/
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
          this.props.onCardClick(id);
         console.log(id);
    }

    

    render() {
        return (
            <div className="PlantCard card col-sm-4" 
            data-id={this.props.plant} 
            onClick={() => this.seeDetails(this.props.plant.id)} 
            key={this.props.plant} >
                <img src="https://blog.interflora.fr/wp-content/uploads/2016/05/Entretien-bouquet-de-fleurs.jpg" alt={"Photo de "+ this.props.name} className="card-img-top"/>
                <h2 className="card-title">{this.props.plant.name}</h2>
                <p className="card-body">Argent - Temps - Saison</p>
                <p className="card-body">Attire : </p>
            </div>
        );
    }
    
  
}

PlantCard.propTypes = {
  name: PropTypes.string.isRequired,
}



