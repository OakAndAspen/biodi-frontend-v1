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
         
                <div id="balcony">
            <img src={Config.imgFolder + "/balconyXL.svg"} className="hidden" alt="Balcony" />
                    <div id="iconswrap">
                        
                        <img src={Config.imgFolder + "/icon/information.svg"} alt="plus d'informations" className="icons" />
                        <img src={Config.imgFolder + "/icon/share.svg"} alt="partager" className="icons" />
                        <img src={Config.imgFolder + "/icon/loading.svg"} alt="en cours d'enregistrement" className="icons hiddenIco" /> {/* ${this.isOpen() ? 'open' : 'closed'} pour toggle */}
                        <img src={Config.imgFolder + "/icon/tick-inside-circle.svg"} alt="Enregistré !" className="icons" />
                         <img src={Config.imgFolder + "/icon/cancel.svg"} alt="Fermer" className="icons" />
                    </div>
                    <div className="balconyelement" id="bac">
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div>
                        <div className="places" id="place1">
                        </div>
                    <div className="places hiddenPlaces" id="place2">
                    </div>
                    <div className="places hiddenPlaces" id="place3">
                    </div>
                    <div className="places hiddenPlaces" id="place4">
                    </div>
                    <div className="pots balconyelement" id="pot3"> <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div> 
                    <div className="places hiddenPlaces" id="place5">
                    </div>
                    <div className="pots balconyelement" id="pot4"> <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div> 
                    <div className="places hiddenPlaces" id="place6">
                    </div>
                    <div className="pots balconyelement" id="pot5"><img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" /> 
                    </div> 
                    <div className="places hiddenPlaces" id="place7">
                    </div>
                    <div className="balconyelement" id="suspendedpot"> <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div>
                    <div className="places hiddenPlaces" id="place8">
                    </div>
                    <div className="balconyelement" id="climbingtrail"><img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div>
                    <div className="places hiddenPlaces" id="place9">
                    </div>
                    <div className="construction balconyelement" id="construction1"><img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div> 
                    <div className="places hiddenPlaces" id="place10">
                    </div>
                    <div className="construction balconyelement" id="construction2"><img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div> 
                    <div className="places hiddenPlaces" id="place11">
                    </div>
                </div>
                <div className="helper w-100">
                </div>
            </div>
                
        );
    }
}
