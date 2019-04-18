import React from 'react';
import Config from "../../Config";
import {Link} from "react-router-dom";
import "./Param.css";
import Slider from "@material-ui/lab/Slider";
import $ from "jquery";

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

        this.create = this.create.bind(this);
    }

    onNameChange(value) {
        if (value.length <= 14) this.setState({name: value});
    }

    toggleEnvElement(element) {
        let environment = this.state.environment;
        let index = environment.indexOf(element);
        if (index === -1) environment.push(element);
        else environment.splice(index, 1);
        this.setState({environment: environment});
    }

    create() {
        if (!this.state.name) return null;
        let data = {
            name: this.state.name,
            size: this.state.size,
            sunlight: this.state.exposition,
            pet: this.state.animals,
            environnement: this.state.environment,
            floor: this.state.stock,
            goal: this.state.goal
        };

        $.ajax({
            method: "POST",
            url: Config.apiUrl + '/v1/balconies/add',
            data: JSON.stringify(data),
            context: this
        }).done(res => {
            this.props.history.push("/balcony/" + res.id);
        }).fail(() => {
            alert("Il y a eu une erreur lors de la création du balcon. Désolés pour le dérangement! Nous faisons de notre mieux.");
        });
    }

    render() {
        return (
            <div className="h-100 w-100 bg-light">
                <div className="h-100 w-100 overflow-auto" id="Background">
                    {this.renderBanner()}
                    <div className="container">
                        {this.renderProgress()}
                        <div className="row">
                            <div className="col-6 col-lg-2 text-center py-2">
                                {this.renderPrevious()}
                            </div>
                            <div className="col-6 col-lg-2 text-center py-2 order-lg-3">
                                {this.renderNext()}
                            </div>
                            <div className="col-12 col-lg-8 text-center">
                                {this.renderCurrentStep()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderBanner() {
        let style = {
            backgroundImage: "url(" + Config.imgFolder + "/photo-balcon.png)",
            backgroundSize: "cover",
            height: "250px",
            backgroundPosition: "center center"
        };
        return (
            <div className="w-100" style={style}>
                <div className="row h-100 align-items-center">
                    <Link to="/dashboard" className="btn btn-dark text-info px-3" id="CloseButton">
                        <i className="fas fa-times"/>
                    </Link>
                </div>
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
            <button className="btn btn-outline-dark text-dark"
                    onClick={() => this.setState({step: this.state.step - 1})}>
                <span className="m-2">
                    <i className="fas fa-angle-double-left"/>
                </span>
                <span className="m-2 d-lg-block">Précédent</span>
            </button>
        );
    }

    renderNext() {
        if (this.state.step > 6) return null;
        return (
            <button className="btn btn-outline-dark text-dark"
                    onClick={() => this.setState({step: this.state.step + 1})}>
                <span className="m-2">
                    <i className="fas fa-angle-double-right"/>
                </span>
                <span className="m-2 d-lg-block">Suivant</span>
            </button>
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
            <div className="row">
                <div className="col-12">
                    <h3 className="my-3">Quel nom voulez-vous donner à votre balcon?</h3>
                </div>
                <div className="col-12 col-sm-6 mx-auto">
                    <input type="text" className="form-control text-center" value={this.state.name}
                           onChange={e => this.onNameChange(e.target.value)}/>
                    <small className="form-text text-muted">Max. 14 caractères</small>
                </div>
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
            <div className="row">
                <div className="col-12">
                    <h3 className="my-3">Taille du balcon</h3>
                </div>
                {options.map(o => {
                    let color = this.state.size === o.letter ? "btn-success" : "btn-light";
                    return (
                        <div className="col-6 col-sm-3 p-3" key={o.letter}>
                            <button className={color + " btn w-100 text-dark"}
                                    onClick={() => this.setState({size: o.letter})}>
                                <span className="display-4">{o.letter}</span><br/>
                                <span>{o.size} m²</span>
                            </button>
                        </div>
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
                    <span className={"display-4 exposition-" + this.state.exposition}>
                        <i className="fas fa-sun"/>
                    </span>
                    <span className="text-dark d-block">{options[this.state.exposition]} heures par jour</span>
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
            <div className="row mb-3">
                <div className="col-12 col-md-4 col-lg-6">
                    <h3 className="my-3">Etage</h3>
                </div>
                <div className="col-12 col-md-8 col-lg-6">
                    {stocks.map(stock => {
                        let color = stock.value === this.state.stock ? "btn-success" : "btn-light";
                        return (
                            <button className={"d-block w-100 mb-1 btn btn-sm " + color} key={stock.value}
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
            <div className="row">
                <div className="col-12">
                    <h3 className="my-3">
                        Cochez tout ce qui se trouve dans un rayon de 20 mètres autour de votre balcon
                    </h3>
                </div>
                {options.map(o => {
                    let color = this.state.environment.indexOf(o.value) !== -1 ? "btn-success" : "btn-light";
                    return (
                        <div className="col-12 col-sm-4 p-3" key={o.value}>
                            <button className={color + " btn w-100 text-dark"}
                                    onClick={() => this.toggleEnvElement(o.value)}>
                                <span className="display-4 d-block"><i className={o.icon}/></span>
                                <span>{o.text}</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }

    renderStepAnimals() {
        let options = ["non", "oui"];
        return (
            <div className="row">
                <div className="col-12">
                    <h3 className="my-3">
                        Avez-vous des animaux ayant accès au balcon?
                    </h3>
                </div>
                {options.map(o => {
                    let color = this.state.animals === o ? "btn-success" : "btn-light";
                    return (
                        <div className="col p-3" key={o}>
                            <button className={color + " btn w-100 text-dark"}
                                    onClick={() => this.setState({animals: o})}>
                                {o}
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }

    renderStepGoal() {
        let disabled = this.state.name ? "" : "disabled";
        return (
            <div>
                <h3 className="my-3">Quel est votre objectif?</h3>
                <div className="py-4">
                    <Slider min={1} max={5} step={1} value={this.state.goal} className="Slider"
                            onChange={(e, value) => this.setState({goal: value})}/>
                </div>
                <div className="row mb-2">
                    <div className="col text-left"><h5>Enjoliver mon balcon</h5></div>
                    <div className="col text-right"><h5>Favoriser la biodiversité</h5></div>
                </div>
                <button className={"col btn btn-lg btn-success w-100 mb-2 " + disabled} onClick={this.create}>
                    Créer mon balcon
                </button>
                {!this.state.name &&
                <div className="alert alert-warning w-100 mb-4">Vous n'avez pas choisi de nom pour votre balcon.</div>
                }
            </div>
        );
    }
}
