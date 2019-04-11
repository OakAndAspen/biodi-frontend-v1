import React from 'react';
import Config from "../../Config";
import {Link} from "react-router-dom";
import "./Param.css";

export default class Param extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };
    }

    render() {
        return (
            <div className="h-100 w-100 bg-info">
                {this.renderBanner()}
                {this.renderProgress()}
                <div className="row">
                    <div className="col-12 col-md-3 col-lg-2">
                        {this.renderPrevious()}
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 text-center">
                        {this.renderCurrentStep()}
                    </div>
                    <div className="col-12 col-md-3 col-lg-2">
                        {this.renderNext()}
                    </div>
                </div>
            </div>
        );
    }

    renderBanner() {
        let style = {
            backgroundImage: "url(" + Config.imgFolder + "/photo-balcon.png" + ")",
            backgroundSize: "cover",
            height: "250px",
            backgroundPosition: "center center"
        };
        return (
            <div className="w-100 p-3" style={style}>
                <Link to="/dashboard">
                    <i className="fas fa-times text-dark"/>
                </Link>
            </div>
        );
    }

    renderProgress() {
        let style = {
            width: this.state.step * 100 / 7 + "%",
        };

        return (
            <div className="row my-4">
                <div className="col-12 col-sm-6 col-lg-4 mx-auto text-center">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-dark" style={style}>
                            Etape {this.state.step} / 7
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderPrevious() {
        if (this.state.step < 2) return null;
        return (
            <div onClick={() => this.setState({step: this.state.step - 1})} id="BtnPrevious">
                <h1><i className="fas fa-angle-double-left"/></h1>
                <h3>Précédent</h3>
            </div>
        );
    }

    renderNext() {
        if (this.state.step > 6) return null;
        return (
            <div onClick={() => this.setState({step: this.state.step + 1})} id="BtnNext">
                <h1><i className="fas fa-angle-double-right"/></h1>
                <h3>Suivant</h3>
            </div>
        );
    }

    renderCurrentStep() {
        switch (this.state.step) {
            case 1:
                return this.renderStepName();
            case 2:
                return this.renderStepSize();
            case 3:
                return this.renderStepExposition();
            case 4:
                return this.renderStepStock();
            case 5:
                return this.renderStepEnvironment();
            case 6:
                return this.renderStepAnimals();
            case 7:
                return this.renderStepFav();
            default:
                this.setState({step: 1});
                return <h1>Error</h1>;
        }
    }

    renderStepName() {
        return (
            <h1>Step 1: Name</h1>
        );
    }

    renderStepSize() {
        return (
            <h1>Step 2: Size</h1>
        );
    }

    renderStepExposition() {
        return (
            <h1>Step 3: Exposition</h1>
        );
    }

    renderStepStock() {
        return (
            <h1>Step 4: Etage</h1>
        );
    }

    renderStepEnvironment() {
        return (
            <h1>Step 5: Environment</h1>
        );
    }

    renderStepAnimals() {
        return (
            <h1>Step 6: Animaux</h1>
        );
    }

    renderStepFav() {
        return (
            <h1>Step 7: Favoriser</h1>
        );
    }
}
