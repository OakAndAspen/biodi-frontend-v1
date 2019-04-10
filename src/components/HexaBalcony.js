import React from 'react';
import "./HexaBalcony.css";
import Config from "../Config";

export default class HexaBalcony extends React.Component {

    render() {
        let textStyle = {
            position: "absolute",
            top: "50px",
            fontVariant: "small-caps",
            fontWeight: "bold",
            cursor: this.props.title ? 'pointer' : 'inherit'
        };
        let imageUrl = Config.imgFolder + "/photo-balcon.png";
        let polyStyle = {
            fill: 'url(#image)'
        };
        return (
            <div className="w-100 h-100 HexaBalcony" onClick={this.props.onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 519.62">
                    <defs>
                        <pattern id="image" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                            <image height="1" width="1" preserveAspectRatio="none" href={imageUrl}/>
                        </pattern>
                    </defs>
                    <polygon className="cls-1" style={polyStyle}
                             points="450 0 600 259.81 450 519.62 150 519.62 0 259.81 150 0 450 0"/>
                </svg>
                <div style={textStyle} className="text-center w-100 text-light">{this.props.title}</div>
            </div>
        );
    }
}
