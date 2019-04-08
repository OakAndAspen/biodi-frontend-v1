import React from 'react';
import './public.css';
import Map from '../../components/Map';
import Config from "../../Config";
import {Link} from "react-router-dom";
import SignUp from "../../components/SignUp";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popupOn: false
        };
    }

    render() {
        const logoStyle = {
          maxHeight: "80px"
        };
        return (
            <div className="h-100 overflow-auto">
                <SignUp show={this.state.popupOn} onClose={() => this.setState({popupOn:false})}/>
                <div className="container">
                    {/* Logo Biodi */}
                    <div className="row my-3">
                        <div className="col-12 text-center">
                            <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City"
                                 className="img-fluid mr-4" style={logoStyle}/>
                            <img src={Config.imgFolder + "/birdlife.png"} alt="BirdLife"
                                 className="img-fluid" style={logoStyle}/>
                        </div>
                    </div>
                    {/* Quartiers */}
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mx-auto my-3">
                            <Map onChoice={id => this.setState({popupOn: true})}/>
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
        );
    }
}
