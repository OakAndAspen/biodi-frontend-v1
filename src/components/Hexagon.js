import React from 'react';
import "./Hexagon.css";
import Config from "../Config";
import $ from "jquery";

export default class Hexagon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.id) {
            this.props.history.push("/balcony/" + this.props.id);
        }
    }

    render() {
        let offset = this.props.column % 2 === 0 ? 0 : 67;
        let hexaStyle = {
            top: (this.props.row - 1) * 136 + offset + "px",
            left: (this.props.column - 1) * 120 + "px",
            position: "absolute",
            width: "150px",
            height: "150px"
        };
        let polyStyle = {
            fill: this.props.title ? 'url("#image")' : Config.colors.biodiLightGrey,
            cursor: this.props.title ? 'pointer' : 'inherit'
        };
        let textStyle = {
            position: "absolute",
            top: "50px",
            fontVariant: "small-caps",
            fontWeight: "bold",
            cursor: this.props.title ? 'pointer' : 'inherit'
        };

        let imageUrl = Config.imgFolder + "/photo-balcon.png";

        return (
            <div className={"Hexagon" + (this.props.title ? " active" : "")} style={hexaStyle} onClick={this.onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.03 328.25">
                    <defs>
                        <pattern id="image" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                            <image height="1" width="1" preserveAspectRatio="none" href={imageUrl}/>
                        </pattern>
                    </defs>
                    <polygon className="cls-1" style={polyStyle}
                             points="0 164.13 94.76 0 284.28 0 379.03 164.13 284.27 328.25 94.76 328.25 0 164.13"/>
                </svg>
                {this.props.title &&
                <div style={textStyle} className="text-center w-100 text-light">{this.props.title}</div>
                }
            </div>
        );
    }
}
