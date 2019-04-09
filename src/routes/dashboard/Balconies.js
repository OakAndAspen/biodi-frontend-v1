import React from 'react';
import Hexagon from "../../components/Hexagon";

export default class Balconies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-100 h-100 p-2 p-md-4">
                <Hexagon row="1" column="1"/>
                <Hexagon row="1" column="2"/>
                <Hexagon row="2" column="1"/>
                <Hexagon row="2" column="2" title="Mon balcon" id="567" history={this.props.history}/>
                <Hexagon row="3" column="1"/>
                <Hexagon row="3" column="2"/>
                <Hexagon row="4" column="1"/>
                <Hexagon row="4" column="2"/>
            </div>
        );
    }
}
