import React from 'react';
import "./Hexagon.css";
import Config from "../Config";
import $ from "jquery";

export default class Hexagon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let offset = this.props.column % 2 === 0 ? 0 : 67;
        let hexaStyle = {
            top: (this.props.row - 1) * 136 + offset + "px",
            left: (this.props.column - 1) * 120 + "px",
        };
        let polyStyle = {
            fill: this.props.imgUrl ? 'url("#image")' : Config.colors.biodiLightGrey
        };

        //let imageUrl = "http://localhost:3000/images/photo-balcon.png";
        let imageUrl = Config.imgFolder + "/" + this.props.imgUrl;

        return (
            <svg data-name="Hexagon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.03 328.25"
                 className="Hexagon" style={hexaStyle}>
                <defs>
                    <pattern id="image" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                        <image height="1" width="1" preserveAspectRatio="none" href={imageUrl}/>
                    </pattern>
                </defs>
                <polygon className="cls-1" style={polyStyle}
                         points="0 164.13 94.76 0 284.28 0 379.03 164.13 284.27 328.25 94.76 328.25 0 164.13"/>
            </svg>
        );
    }
}
