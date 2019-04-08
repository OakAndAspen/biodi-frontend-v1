import React from 'react';
import "./Visualization.css";
import Config from "../../Config";

export default class Visualization extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

   
    render() {
        return (
            <div className="w-100 h-100 container overflow-auto onePage">
               {/* <h1>
                    Visualization for balcony n°{this.props.match.params.id}
                </h1>*/}
         
                <div id="balcony" >
            <img src={Config.imgFolder + "/balconyXL.svg"} className="hidden" alt="Balcony" />
                    <div className="pots" id="pot1">
                    </div>    
                    <div className="pots" id="pot2">
                    </div> 
                    <div className="pots" id="pot3">
                    </div> 
                    <div className="pots" id="pot4">
                    </div> 
                    <div className="pots" id="pot5">
                    </div> 
                    <div id="suspendedpot">
                    </div> 
                    <div id="climbingtrail">
                    </div> 
                </div>
            </div>
                
        );
    }
}
