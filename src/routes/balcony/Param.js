import React from 'react';
import Config from "../../Config";
import {Link} from "react-router-dom";

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
        return (
            <div className="w-100 text-center my-4">
                <h1>Progress bar (step {this.state.step})</h1>
            </div>
        );
    }

    renderPrevious() {
        if (this.state.step < 2) return null;
        return (
            <div onClick={() => this.setState({step: this.state.step - 1})}>
                <h1>Go back to {this.state.step - 1}</h1>
            </div>
        );
    }

    renderNext() {
        if (this.state.step > 6) return null;
        return (
            <div onClick={() => this.setState({step: this.state.step + 1})}>
                <h1>Go to {this.state.step + 1}</h1>
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
