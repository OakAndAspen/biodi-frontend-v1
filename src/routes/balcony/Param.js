import React from 'react';
import Config from "../../Config";
import {Link} from "react-router-dom";
import "./Param.css";
import Slider from "@material-ui/lab/Slider";

export default class Param extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            name: "",
            size: "S",
            exposition: 3
        };
    }

    render() {
        return (
            <div className="h-100 w-100 bg-light">
                <div className="h-100 w-100" id="Background">
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
            <div>
                <h3 className="my-3">Quel nom voulez-vous donner à votre balcon?</h3>
                <input type="text" className="form-control" placeholder="Balcony the First" value={this.state.name}
                       onChange={e => this.setState({name: e.target.value})}/>
            </div>
        );
    }

    renderStepSize() {
        let options = [
            {
                letter: "S",
                size: "1-2"
            },
            {
                letter: "M",
                size: "3-5"
            },
            {
                letter: "L",
                size: "5-7"
            },
            {
                letter: "XL",
                size: "8+"
            }
        ];

        return (
            <div>
                <h3 className="my-3">Taille du balcon</h3>
                {options.map(o => {
                    let color = this.state.size === o.letter ? "btn-success" : "btn-light";
                    return (
                        <button className={"btn " + color + " mx-2 px-4 SizeButton active"}
                                onClick={() => this.setState({size: o.letter})}>
                            <span className="display-4">{o.letter}</span><br/>
                            <span>{o.size} m²</span>
                        </button>
                    );
                })}
            </div>
        );
    }

    renderStepExposition() {
        let options = {
            1: "0-2",
            2: "3-5",
            3: "6-8",
            4: "9-11",
            5: "12+"
        };

        return (
            <div>
                <h3 className="my-3">Exposition au soleil</h3>
                <div className="py-4">
                    <Slider min={1} max={5} step={1} id="ExpositionSlider" value={this.state.exposition}
                            onChange={(e, value) => this.setState({exposition: value})}/>
                </div>
                <div id="ExpositionLegend">
                    <i className={"fas fa-sun mr-2 display-4 exposition-" + this.state.exposition}/>
                    <br/>
                    {options[this.state.exposition]} heures par jour
                </div>
            </div>
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
