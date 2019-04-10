import React from 'react';
import Hexagon from "../../components/Hexagon";
import DashboardLayout from "../../DashboardLayout";

export default class Balconies extends React.Component {

    render() {
        return (
            <DashboardLayout>
                <div className="w-100 h-100 p-2 p-md-4">
                    <Hexagon row="1" column="1"/>
                    <Hexagon row="1" column="2" history={this.props.history} id="new"/>
                    <Hexagon row="2" column="1"/>
                    <Hexagon row="2" column="2" history={this.props.history} id="567" title="Mon balcon"/>
                    <Hexagon row="2" column="3" history={this.props.history} id="567" title="Coucou"/>
                    <Hexagon row="3" column="1"/>
                    <Hexagon row="3" column="2"/>
                    <Hexagon row="4" column="1"/>
                    <Hexagon row="4" column="2"/>
                </div>
            </DashboardLayout>
        );
    }
}
