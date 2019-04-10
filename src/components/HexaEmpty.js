import React from 'react';
import Config from "../Config";

export default class HexaEmpty extends React.Component {

    render() {
        let polyStyle = {
            fill: Config.colors.biodiLightGrey
        };

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 519.62" className="HexaEmpty">
                <polygon className="cls-1" style={polyStyle}
                         points="450 0 600 259.81 450 519.62 150 519.62 0 259.81 150 0 450 0"/>
            </svg>
        );
    }
}
