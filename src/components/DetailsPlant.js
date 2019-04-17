import React from 'react';
import "./DetailsPlant.css";
import Config from "../Config";

export default class DetailsPlant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFull: false,
            plant: null
        };
    }

    componentWillReceiveProps() {
        fetch(Config.apiUrl + '/v1/plants/' + this.props.id)
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
        return (
            <div id="DetailsPlant">
                <h2>{this.state.plant.name}</h2>
                <div className="imgPlant"/>
                {this.renderIcons()}
                <div className="wrapLeft col-sm-6">
                    <h2>Pourquoi ?</h2>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                        impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500,
                        quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre
                        spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi
                        adapté à la bureautique.</p>
                </div>
                <div className="wrapRight col-sm-6">
                    <h2>Conseils pratiques</h2>
                    <ul>
                        <li>Arroser toutes les heures</li>
                        <li>Arroser toutes les heures</li>
                    </ul>
                    <p>Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique
                        informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960
                        grâce à la vente de feuilles Letraset..</p>
                </div>
                {this.renderButton()}
            </div>
        );
    }

    renderIcons() {
        return (
            <p className="wrapIcons">
                <img src={Config.imgFolder + "/icon/coin.png"} alt="Soleil!" className="iconDetails"/>
                -
                <img src={Config.imgFolder + "/icon/time.png"} alt="Soleil!" className="iconDetails"/>
                -
                <img src={Config.imgFolder + "/icon/sun.png"} alt="Soleil!" className="iconDetails"/>
                -
                Oiseaux, Insectes
            </p>
        );
    }

    renderButton() {
        if (this.state.isFull) return (
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





