import React from 'react';
import "./DetailsPlant.css";
import Config from "../Config";

export default class DetailsPlant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plant: null
        };
    }

    componentWillReceiveProps() {
        fetch(Config.apiUrl + '/v1/contents/' + this.props.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        plant: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        if (!this.state.plant) return <h1 className="text-center my-4">...</h1>;

        const stylesImg = {
            backgroundImage: 'url(' + this.state.plant.img + ')',
        };

        return (
            <div id="DetailsPlant">
                <h2>{this.state.plant.name}</h2>
                <div className="imgPlant" style={stylesImg}/>
                {this.renderIcons()}
                <div className="wrapLeft col-sm-6">
                    <h2>Description </h2>
                    <p>{this.state.plant.description}</p>
                </div>
                <div className="wrapRight col-sm-6">
                    <h2>Conseils pratiques</h2>
                    <p>{this.state.plant.maintain}</p>
                </div>
                {this.renderButton()}
            </div>
        );
    }

    renderIcons() {
        return (
            <p className="wrapIcons">
                {this.state.plant.initialBudget}/5
                <img src={Config.imgFolder + "/icon/coin.png"} alt="Argent!" className="iconDetails"/>
                -&nbsp;
                {this.state.plant.initialTime}/5
                <img src={Config.imgFolder + "/icon/time.png"} alt="Temps!" className="iconDetails"/>
                -&nbsp;
                {this.state.plant.sunlight}/5
                <img src={Config.imgFolder + "/icon/sun.png"} alt="Soleil!" className="iconDetails"/>
                -&nbsp;
                Favorise : &nbsp;
                {this.state.plant.favorising}
            </p>
        );
    }

    renderButton() {
        if (this.props.stickOrNot) return (
            <button className={"btn btn-danger mb-3 w-100"}
                    onClick={this.props.onClickDelete}>
                Supprimer
            </button>
        );

        return (
            <button className={"btn btn-success mb-3 w-100"}
                    onClick={this.props.onClickAdd}>
                Ajouter
            </button>
        );
    }
}





