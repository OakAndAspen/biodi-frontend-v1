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
                score: 300 * zones[label][1].number_of_users
                    + 50 * zones[label][2].number_of_balconies
                    + 30 * zones[label][0].number_of_posts
            };
            array.push(zone);
        }
        array.sort((a, b) => b.score - a.score);
        array = array.map((z, i) => {
            z.place = i + 1;
            return z;
        });
        console.log(array);
        return array;
    }

    render() {
        return (
            <DashboardLayout>
                <div className="container" id="Lausanne">
                    <div className="row">
                        {this.renderText()}
                        {this.renderScoreboard()}
                    </div>
                    <div className="row">
                        {this.renderMap()}
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    renderText() {
        return (
            <div className="col-12 col-md-8">
                <h2>Aidez votre quartier à être le plus Biodi de tous ! </h2>
                <p>En invitant vos amis à s’inscire, en continuant de réaliser vos balcons de rêves ou en
                    participant à notre forum, vous gagnez des points afin de rendre votre quartier toujours
                    plus vert ! Serrez-vous les coudes, et bonne chance pour être les meilleurs !</p>
                <p>Actuellement, vous avez ramené <strong>42</strong> points pour votre quartier, continuez
                    comme ça ! </p>
            </div>
        );
    }

    renderScoreboard() {
        return (
            <div className="col-12 col-md-4">
                <div className="card w-100" id="Scoreboard">
                    <div className="card-body text-center">
                        <h5 className="card-title my-0">Tableau des scores</h5>
                    </div>
                    {<ul className="list-group list-group-flush">
                        {this.state.zones.map(z =>
                            <li className="list-group-item text-center">
                                <i className={"fas fa-trophy trophy-" + z.place}/>
                                <span className="ml-2">{z.label}</span>
                            </li>
                        )}
                    </ul>}
                </div>
            </div>
        );
    }

    renderMap() {
        return (
            <div className="col-12 my-3 wrapMap">
                <Map page="dash"/>
            </div>
        );
    }
}
