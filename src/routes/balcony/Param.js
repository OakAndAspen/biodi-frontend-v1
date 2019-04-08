import React from 'react';

export default class Param extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <h1>Param for balcony n°{this.props.match.params.id}</h1>;
    }
}
