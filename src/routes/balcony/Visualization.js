import React from 'react';

export default class Visualization extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <h1>Visualization for balcony n°{this.props.match.params.id}</h1>;
    }
}
