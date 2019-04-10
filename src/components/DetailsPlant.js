import React from 'react';
import "./DetailsPlant.css";
import Config from "../Config";
import PropTypes from "prop-types";

export default class DetailsPlant extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {};
    }
    

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <p>{this.props.id}</p>
        );
    }
    
  
}





