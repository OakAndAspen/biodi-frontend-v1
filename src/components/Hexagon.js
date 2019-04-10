import React from 'react';
import "./HexaNew.css";
import HexaNew from "./HexaNew";
import HexaEmpty from "./HexaEmpty";
import HexaBalcony from "./HexaBalcony";

export default class Hexagon extends React.Component {

    render() {
        let offset = this.props.column % 2 === 0 ? 0 : 67;
        let hexaStyle = {
            top: (this.props.row - 1) * 136 + offset + "px",
            left: (this.props.column - 1) * 120 + "px",
            position: "absolute",
            width: "150px",
            height: "150px"
        };

        return (
            <div className={"Hexagon"} style={hexaStyle} onClick={this.onClick}>
                {!this.props.id ?
                    <HexaEmpty/> :
                    this.props.id === "new" ?
                        <HexaNew onClick={() => this.props.history.push("/balcony/new")}/> :
                        <HexaBalcony onClick={() => this.props.history.push("/balcony/" + this.props.id)}
                                     id={this.props.id} title={this.props.title}/>
                }
            </div>
        );
    }
}
