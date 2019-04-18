import React from 'react';

export default class PlantStickers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const stylesStick = {
            backgroundColor: 'white',
            backgroundImage: 'url(' + this.props.image + ')',
            overflow: 'hidden',
        };

        return (
            <div className={"places " + (this.props.etat != null ? "full" : "hiddenPlaces")} id={this.props.id}
                 style={stylesStick} onClick={this.props.onClick}>
            </div>
        );
    }


}




