import React from 'react';
import "./HexaNew.css";

export default class Hexagon extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 519.62" className="HexaNew"
                 onClick={this.props.onClick}>
                <polygon className="cls-1" points="450 0 600 259.81 450 519.62 150 519.62 0 259.81 150 0 450 0"/>
                <polygon className="cls-1"
                         points="423.76 45.45 547.52 259.81 423.76 474.17 176.24 474.17 52.48 259.81 176.24 45.45 423.76 45.45"/>
                <polyline className="cls-2" points="413.76 45.45 423.76 45.45 428.76 54.11"/>
                <line className="cls-3" x1="433.93" y1="63.07" x2="539.93" y2="246.67"/>
                <polyline className="cls-2" points="542.52 251.15 547.52 259.81 542.52 268.47"/>
                <line className="cls-3" x1="537.35" y1="277.42" x2="431.34" y2="461.03"/>
                <polyline className="cls-2" points="428.76 465.5 423.76 474.17 413.76 474.17"/>
                <line className="cls-3" x1="403.42" y1="474.16" x2="191.41" y2="474.16"/>
                <polyline className="cls-2" points="186.24 474.17 176.24 474.17 171.24 465.5"/>
                <line className="cls-3" x1="166.07" y1="456.55" x2="60.07" y2="272.95"/>
                <polyline className="cls-2" points="57.48 268.47 52.48 259.81 57.48 251.15"/>
                <line className="cls-3" x1="62.65" y1="242.19" x2="168.66" y2="58.59"/>
                <polyline className="cls-2" points="171.24 54.11 176.24 45.45 186.24 45.45"/>
                <line className="cls-3" x1="196.58" y1="45.45" x2="408.59" y2="45.45"/>
                <rect className="cls-4" x="291" y="214.81" width="18" height="90" rx="5.11" ry="5.11"/>
                <rect className="cls-4" x="291" y="214.81" width="18" height="90" rx="5.11" ry="5.11"
                      transform="translate(40.19 559.81) rotate(-90)"/>
                <text className="cls-5" transform="translate(214.05 194.6)">Créez un</text>
                <text className="cls-5" transform="translate(141.24 371.52)">nouveau balcon</text>
            </svg>
        );
    }
}
