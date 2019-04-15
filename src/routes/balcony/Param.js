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
            exposition: 3,
            stock: 0,
            environment: [],
            animals: "non",
            goal: 3
        };
    }

    toggleEnvElement(element) {
        let environment = this.state.environment;
        let index = environment.indexOf(element);
        if (index === -1) environment.push(element);
        else environment.splice(index, 1);
        this.setState({environment: environment});
    }

    render() {
        return (
            <div className="h-100 w-100 bg-light">
                <div className="h-100 w-100 overflow-auto" id="Background">
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
                return this.renderStepGoal();
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
            {letter: "S", size: "1-2"},
            {letter: "M", size: "3-5"},
            {letter: "L", size: "5-7"},
            {letter: "XL", size: "8+"}
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
                    <Slider min={1} max={5} step={1} value={this.state.exposition} className="Slider"
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
        let stocks = [
            {value: 7, label: "7+"},
            {value: 6, label: "6"},
            {value: 5, label: "5"},
            {value: 4, label: "4"},
            {value: 3, label: "3"},
            {value: 2, label: "2"},
            {value: 1, label: "1"},
            {value: 0, label: "Rez"}
        ];

        return (
            <div className="row">
                <div className="col-12 col-md-4 col-lg-6">
                    <h3 className="my-3">Etage</h3>
                </div>
                <div className="col-12 col-md-8 col-lg-6">
                    {stocks.map(stock => {
                        let color = stock.value === this.state.stock ? "btn-success" : "btn-light";
                        return (
                            <button className={"d-block w-100 mb-1 btn btn-sm " + color}
                                    onClick={() => this.setState({stock: stock.value})}>
                                {stock.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderStepEnvironment() {
        let options = [
            {value: "tree", icon: "fas fa-tree", text: "Arbres"},
            {value: "grass", icon: "fas fa-seedling", text: "Herbe"},
            {value: "building", icon: "fas fa-building", text: "Immeubles"}
        ];

        return (
            <div>
                <h3 className="my-3">
                    Cochez tout ce qui se trouve dans un rayon de 20 mètres autour de votre balcon
                </h3>
                {options.map(o => {
                    let color = this.state.environment.indexOf(o.value) !== -1 ? "btn-success" : "btn-light";
                    return (
                        <button className={"btn " + color + " mx-2 px-4 active"}
                                onClick={() => this.toggleEnvElement(o.value)}>
                            <i className={o.icon + " display-4"}/> <br/>
                            <span>{o.text}</span>
                        </button>
                    );
                })}
            </div>
        );
    }

    renderStepAnimals() {
        let options = ["non", "oui"];
        return (
            <div>
                <h3 className="my-3">
                    Avez-vous des animaux ayant accès au balcon?
                </h3>
                {options.map(o => {
                    let color = this.state.animals === o ? "btn-success" : "btn-light";
                    return (
                        <button className={"btn " + color + " mx-2 px-4"}
                                onClick={() => this.setState({animals: o})}>
                            {o}
                        </button>
                    );
                })}
            </div>
        );
    }

    renderStepGoal() {
        return (
            <div>
                <h3 className="my-3">Quel est votre objectif?</h3>
                <div className="py-4">
                    <Slider min={1} max={5} step={1} value={this.state.goal} className="Slider"
                            onChange={(e, value) => this.setState({goal: value})}/>
                </div>
                <div className="row">
                    <div className="col text-left"><h5>Enjoliver mon balcon</h5></div>
                    <div className="col text-right"><h5>Favoriser la biodiversité</h5></div>
                </div>
                <div className="row">
                    <button className="btn btn-lg btn-success w-100 my-3">Créer mon balcon</button>
                </div>
            </div>
        );
    }
}
