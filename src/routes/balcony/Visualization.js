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
                    <div className="pots">
                    </div>    
                    <div className="pots">
                    </div> 
                    <div className="pots">
                    </div> 
                    <div className="pots">
                    </div> 
                </div>
            </div>
                
        );
    }
}
