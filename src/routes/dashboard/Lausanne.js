import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import Map from '../../components/Map';
import "./Lausanne.css";
import Config from "../../Config";
import $ from "jquery";

export default class Lausanne extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zones: []
        };
        this.renderScoreboard = this.renderScoreboard.bind(this);
    }

    componentDidMount() {
        this.getScores();
    }

    getScores() {
        $.ajax({
            method: "GET",
            url: Config.apiUrl + '/v1/points',
            context: this
        }).done(res => {
            this.setState({zones: this.calculateScores(res)});
        });
    }

    calculateScores(zones) {
        let array = [];
        for (let label in zones) {
            let zone = {
                label: label,
                score: 30 * zones[label][1].number_of_users
                    + 5 * zones[label][2].number_of_balconies
                    + 3 * zones[label][0].number_of_posts
            };
            array.push(zone);
        }
        array.sort((a, b) => b.score - a.score);
        array = array.map((z, i) => {
            z.place = i + 1;
            return z;
        });
        return array;
    }

    render() {
        return (
            <DashboardLayout>
                <div className="container py-4" id="Lausanne">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            {this.renderText()}
                        </div>
                        <div className="col-12 col-md-6">
                            {this.renderScoreboard()}
                        </div>
                    </div>
                    <div className="col-12 col-md-10 col-lg-8 mx-auto">
                        {this.state.zones &&
                        <Map page="dash" scores={this.state.zones}/>}
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    renderText() {
        return (
            <div className="text-justify">
                <h2>Aidez votre quartier à être le plus Biodi de tous ! </h2>
                <p>En invitant vos amis à s’inscrire, en continuant de réaliser vos balcons de rêves ou en
                    participant à notre forum, vous gagnez des points afin de rendre votre quartier toujours
                    plus vert.</p>
                <p>Serrez-vous les coudes, et bonne chance pour être les meilleurs !</p>
            </div>
        );
    }

    renderScoreboard() {
        return (
            <div className="card w-100 mb-4" id="Scoreboard">
                <div className="card-body text-center">
                    <h5 className="card-title my-0">Tableau des scores</h5>
                </div>
                {<ul className="list-group list-group-flush">
                    {this.state.zones.map(z =>
                        <li className="list-group-item text-center">
                            <i className={"fas fa-trophy trophy-" + z.place}/>
                            <span className="ml-2">{z.label} - {z.score} pts</span>
                        </li>
                    )}
                </ul>}
            </div>
        );
    }
}
