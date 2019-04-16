import React from 'react';
import Config from "../Config";
import PropTypes from "prop-types";

export default class PlantCard extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {};
        
      
    }
    
  
   seeDetails(id) {
          this.props.onClick();
         
        this.setState({
            visible : true,
            
        });
    }
  

    render() {
        const stylesStick = {
            backgroundImage: 'url(' + Config.imgFolder+'/'+ this.props.image + ')',
            overflow: 'hidden',
        }
        return (
            <div className={"places "+ (this.props.etat!=null ? "full" : "hiddenPlaces")} id={this.props.id} style={stylesStick} onClick={() => this.seeDetails(this.props.id)}>
            </div>
        );
    }
    
  
}

PlantCard.propTypes = {
  id: PropTypes.string.isRequired,
}



