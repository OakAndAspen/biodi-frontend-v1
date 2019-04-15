import React from 'react';
import Config from "../Config";
import PropTypes from "prop-types";

export default class PlantCard extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {};
    }
    
  

  

    render() {
        return (
            <div className={"places "+ (this.props.etat!=null ? "full" : "hiddenPlaces")} id={this.props.id}>
            </div>
        );
    }
    
  
}

PlantCard.propTypes = {
  id: PropTypes.string.isRequired,
}



