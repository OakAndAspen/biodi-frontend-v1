import React, {Component} from 'react';
import style from './ModalStyle.js';
import "./Modal.css";
import Config from "../Config";
import PlantCard from "./PlantCard";
import DetailsPlant from "./DetailsPlant";

export default class Modal extends Component {
    constructor(props) {
        super(props);
        let effect = props.effect || 'fadeInDown';
        this.setSize(effect);
        this.state = {
            visible: props.visible,
            style: style[effect],
            plants: [],
            constructions: []
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let effect = 'fadeInDown';
        this.setState({visible: nextProps.visible});
        this.setSize(effect);
        this.setStyles(effect);
        this.getArrange(nextProps.pot);
        this.render();
    }
    
    getArrange(pot){
        let idArrangement;
        {(() => {
        switch(pot) {
          case 9:
            idArrangement = 2;
                break;
          case 10:
          idArrangement = 4;
                break;
          case 11:
            idArrangement = 4;
                break;
            case 8:
             idArrangement = 3;
                break;
          default:
           idArrangement = 1;
                break;
        }
      })()}
        this.getPlants(idArrangement);
    }

    getPlants(data) {
        fetch(Config.apiUrl + '/v1/balconies/' + this.props.currentBalcony + '/contents/'+data)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        plants: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    setStyles(effect) {
        if (this.props && this.props.styles) {
            style[effect].panel = {
                ...style[effect].panel,
                ...this.props.styles
            };
        }
    }

    setSize(effect) {
        if (this.props && this.props.width) {
            if (this.props.width.charAt(this.props.width.length - 1) === '%') {
                // Use Percentage
                const width = this.props.width.slice(0, -1);
                style[effect].panel.width = width + '%';
            } else if (this.props.width.charAt(this.props.width.length - 1) === 'x') {
                // Use Pixels
                const width = this.props.width.slice(0, -2);
                style[effect].panel.width = width + 'px';
            } else {
                // Defaults
                style[effect].panel.width = this.props.width + 'px';
            }
        }
        if (this.props && this.props.height) {
            if (this.props.height.charAt(this.props.height.length - 1) === '%') {
                // Use Percentage
                const height = this.props.height.slice(0, -1);
                style[effect].panel.height = height + 'vh';

            } else if (this.props.height.charAt(this.props.height.length - 1) === 'x') {
                // Use Pixels
                const height = this.props.height.slice(0, -2);
                style[effect].panel.height = height + 'px';

            } else {
                // Defaults
                style[effect].panel.height = this.props.height + 'px';
            }
        }
    }

    render() {
        return (
            <div>
                <div style={this.state.visible ? this.state.style.container : this.state.style.containerHidden}>
                    <div style={this.state.visible ? {...this.state.style.panel} : this.state.style.panelHidden}
                         className="modalWhite">
                        {this.renderModalHeader()}
                        {this.props.plant == null ? this.renderPlantCards() : this.renderPlantDetails()}
                    </div>
                    <div style={this.state.visible ? this.state.style.mask : this.state.style.maskHidden}
                         onClick={this.props.onClickAway ? this.props.onClickAway : null}/>
                </div>
            </div>
        );
    }

    renderModalHeader() {
        return (
            <div className="row">
                <div className="col-9">
                    {this.props.plant == null ?
                        <h1>Elements recommandées</h1>
                        :
                        <h3 onClick={this.props.onClickBack} className="text-left">
                            <i className="fas fa-angle-double-left"/>
                        </h3>
                    }
                </div>
                <div className="col-3">
                    <h3 onClick={this.props.onClose} className="text-right">
                        <i className="fas fa-times"/>
                    </h3>
                </div>
            </div>
        );
    }

    renderPlantCards() {
        return (
            <div>
                {this.state.plants.map(plant =>
                    <PlantCard key={plant.id} plant={plant}
                               onClickCard={() => this.props.onClickCard(plant.id)}/>)
                }
            </div>
        );
    }

    renderPlantDetails() {
        return (
            <DetailsPlant id={this.props.plant} stickOrNot={this.props.stickOrNot}
                          onClickAdd={() => this.props.onClickAdd(this.props.plant)}
                            onClickDelete={() => this.props.onClickDelete()}
                          onClickDelete={() => this.props.onClickDelete(this.props.plant)}/>
        );
    }
}

