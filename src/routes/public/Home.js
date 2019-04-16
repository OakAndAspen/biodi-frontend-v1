import React from 'react';
import Map from '../../components/Map';
import Config from "../../Config";
import {Link} from "react-router-dom";
import SignUp from "../../components/SignUp";

import "./Home.css";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popupOn: false,
            neighbourhood: "centre"
        };
    }

    render() {
        const logoStyle = {
          maxHeight: "80px"
        };
        return (
            <div className="h-100 overflow-auto">

                <SignUp show={this.state.popupOn} onClose={() => this.setState({popupOn:false})}
                        history={this.props.history} neighbourhood={this.state.neighbourhood}/>
                <div className="container">
                    {/* Logo Biodi */}
                <div class="vertical-align-wrap">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City"
                                 className="img-fluid mr-4 my-3" style={logoStyle}/>
                            <img src={Config.imgFolder + "/birdlife.png"} alt="BirdLife"
                                 className="img-fluid my-3" style={logoStyle}/>
                        </div>
                    </div>
                    {/* Quartiers */}
                    <div className="row">
                        <div className="col-12 my-3 wrapMap">
                            <Map onChoice={id => this.setState({popupOn: true})} page="home" />
                        </div>
                    </div>
                    {/* Texte */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="text-light">Quel est votre quartier?</h1>
                            <span className="text-secondary">
                                Vous avez déjà un compte Biodi-vers-City?
                                <Link to="/login" className="ml-1">Connectez-vous ici.</Link>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
