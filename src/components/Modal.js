import React, { Component } from 'react';
import style from './ModalStyle.js';
import "./Modal.css";

import PlantCard from "./PlantCard";
import DetailsPlant from "./DetailsPlant";

export default class Modal extends Component {
    constructor(props) {
        super(props);
        let effect = props.effect || 'fadeInDown';
        this.setSize(effect);
        this.state = {
            visible : props.visible,
            style : style[effect],
            plantId:null
        }
    }

    componentWillReceiveProps({visible, effect = 'fadeInDown'}) {
        this.setState({
            visible : visible
        });
        this.setSize(effect);
        this.setStyles(effect);
    }

    setStyles(effect){
        if (this.props && this.props.styles) {
            style[effect].panel = {
                ...style[effect].panel,
                ...this.props.styles
            };
        }
    }

    setSize(effect) {
        if (this.props && this.props.width) {
            if (this.props.width.charAt(this.props.width.length-1) === '%') {
                // Use Percentage
                const width = this.props.width.slice(0, -1);
                style[effect].panel.width = width + '%';

            } else if (this.props.width.charAt(this.props.width.length-1) === 'x') {
                // Use Pixels
                const width = this.props.width.slice(0, -2);
                style[effect].panel.width = width + 'px';

            } else {
                // Defaults
                style[effect].panel.width = this.props.width + 'px';
            }
        }
        if (this.props && this.props.height) {
            if (this.props.height.charAt(this.props.height.length-1) === '%') {
                // Use Percentage
                const height = this.props.height.slice(0, -1);
                style[effect].panel.height = height + 'vh';

            } else if (this.props.height.charAt(this.props.height.length-1) === 'x') {
                // Use Pixels
                const height = this.props.height.slice(0, -2);
                style[effect].panel.height = height + 'px';

            } else {
                // Defaults
                style[effect].panel.height = this.props.height + 'px';
            }
        }
    }
    closeModal() {
        this.setState({
            visible : false,
            plantId: null,
        });
    }

    render() {
        return (
            <div>
                <div style={this.state.visible ? this.state.style.container : this.state.style.containerHidden}>
                    <div style={this.state.visible ? {...this.state.style.panel} : this.state.style.panelHidden} className="modalWhite"  onClickAway={() => this.closeModal()}>
                        {this.props.children}
                    <div>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()} id="closeModal">X</a>
                    </div>
            {this.state.plantId==null &&
                    <h1>
                        Plantes recommandées
                    </h1> 
            }
                {this.state.plantId==null &&
                    this.props.plants.map(plant => <PlantCard key={plant.id} name={plant.name} onClick={() => this.setState({plantId:plant.id})}/>)
                }
                {this.state.plantId!=null &&
                    <DetailsPlant id={this.state.plantId} onClick={() => this.props.onClick(this.state.plantId)}/>
                }
                    </div>
                    <div style={this.state.visible ? this.state.style.mask : this.state.style.maskHidden} onClick={this.props.onClickAway ? this.props.onClickAway : null} />
                </div>
            </div>
        );
    }
}

