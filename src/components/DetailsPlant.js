import React from 'react';
import Config from "../Config";

export default class DetailsPlant extends React.Component {

    state = {
        plant: null
    };

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

        let imgStyle = {
            height: "300px",
            width: "100%",
            backgroundImage: "url(" + this.state.plant.img + ")",
            backgroundPosition: "center center",
            backgroundSize: "cover"
        };

        return (
            <div className="row overflow-auto">
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div className="w-100">
                        <h1 className="text-center">{this.state.plant.name}</h1>
                        {this.renderQuickInfo()}
                    </div>
                </div>
                <div className="col-12 col-lg-6 text-right">
                    <div style={imgStyle} className="rounded"/>
                </div>
                <div className="col-12 col-lg-6 my-3">
                    <h3>Description </h3>
                    <p>{this.state.plant.description}</p>
                </div>
                <div className="col-12 col-lg-6 my-3">
                    <h3>Conseils pratiques</h3>
                    <p>{this.state.plant.maintain}</p>
                </div>
                <div className="col-12">
                    {this.renderButton()}
                </div>
            </div>
        );
    }

    renderQuickInfo() {
        let iconStyle = {
            width: "20px",
            textAlign: "center"
        };

        let tableStyle = {
            fontSize: "1.2em"
        };

        return (
            <table className="my-4 w-100" style={tableStyle}>
                <tbody className="text-dark small-caps">
                <tr>
                    <td className="text-right">BUDGET</td>
                    <td>
                        {[...Array(5)].map((x, i) =>
                            <i className={"fas fa-dollar-sign ml-1 " + (this.state.plant.initialBudget > i ?
                                "text-warning" : "text-secondary")} style={iconStyle}/>
                        )}
                    </td>
                </tr>
                <tr>
                    <td className="text-right">TEMPS</td>
                    <td>
                        {[...Array(5)].map((x, i) =>
                            <i className={"fas fa-clock ml-1 " + (this.state.plant.initialTime > i ?
                                "text-warning" : "text-secondary")} style={iconStyle}/>
                        )}
                    </td>
                </tr>
                <tr>
                    <td className="text-right">ENSOLEILLEMENT</td>
                    <td>
                        {[...Array(5)].map((x, i) =>
                            <i className={"fas fa-sun ml-1 " + (this.state.plant.sunlight > i ?
                                "text-warning" : "text-secondary")} style={iconStyle}/>
                        )}
                    </td>
                </tr>
                </tbody>
            </table>
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





