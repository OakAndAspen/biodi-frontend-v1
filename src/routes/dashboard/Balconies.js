import React from 'react';
import Hexagon from "../../components/Hexagon";
import DashboardLayout from "../../components/DashboardLayout";
import Config from "../../Config";
import $ from "jquery";

export default class Balconies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            balconies: []
        };
    }

    componentDidMount() {
        $.ajax({
            method: "GET",
            url: Config.apiUrl + '/v1/balconies',
            context: this
        }).done(data => {
            this.setState({balconies: data})
        }).fail(() => {
            alert("Il y a eu un souci lors du chargement de vos balcons. Essayez de vous reconnecter.")
        });
    }

    render() {
        return (
            <DashboardLayout>
                <div className="w-100 h-100 p-2 p-md-4">
                    <Hexagon row="1" column="1" history={this.props.history} id="new"/>
                    {this.state.balconies.map((b, i) => {
                            let row = Math.ceil(i / 2 + 1);
                            let column = i % 2 === 0 ? 2 : 1;
                            return (
                                <Hexagon row={row} column={column} history={this.props.history}
                                         id={b.id} title={b.name} key={b.id}/>
                            );
                        }
                    )}
                </div>
            </DashboardLayout>
        );
    }
}
