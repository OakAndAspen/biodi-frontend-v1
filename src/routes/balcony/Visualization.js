import React from 'react';
import "./Visualization.css";
import Config from "../../Config";



import Modal from "../../components/Modal";
import PlantStickers from "../../components/PlantStickers";

export default class Visualization extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            plants : [],
            plantStickers:[
            {id: "place1"},
            {id: "place2"},
            {id: "place3"},
            {id: "place4"},
            {id: "place5"},
            {id: "place6"},
            {id: "place7"},
            {id: "place8"},
            {id: "place9"},
            {id: "place10"},
            {id: "place11"},
        ]
        };
        
        console.log(this.state.plantStickers);
    }
    
     openModal() {
          /*$.ajax({
            method: "PATCH",
            url: Config.apiUrl + '/users',
            context: this,
            data: data
        }).done((data) => {
            console.log(data);
        });*/
         
         let data = [
           {id:1, name:"Plantia"},
           {id:2, name:"Edelweiss"},
             {id:3, name:"Coquelicot"},
             {id:4, name:"Menthe"},
             {id:5, name:"Laurier"},
             {id:6, name:"Bye"},
         ];
         
        this.setState({
            visible : true,
            plants: data
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

   
    render() {
        return (
            <div className="w-100 h-100 container overflow-auto onePage">
               {/* <h1>
                    Visualization for balcony n°{this.props.match.params.id}
                </h1>*/}
         
                <div id="balcony">
                    <img src={Config.imgFolder + "/balconyXL.svg"} className="hidden" alt="Balcony" />
                    <div id="iconswrap">
                        
                        <img src={Config.imgFolder + "/icon/information.svg"} alt="plus d'informations" className="icons" />
                        <img src={Config.imgFolder + "/icon/share.svg"} alt="partager" className="icons" />
                        <img src={Config.imgFolder + "/icon/loading.svg"} alt="en cours d'enregistrement" className="icons hiddenIco" /> {/* ${this.isOpen() ? 'open' : 'closed'} pour toggle */}
                        <img src={Config.imgFolder + "/icon/tick-inside-circle.svg"} alt="Enregistré !" className="icons" />
                         <img src={Config.imgFolder + "/icon/cancel.svg"} alt="Fermer" className="icons" />
                    </div>
                    <div className="balconyelement" id="bac">
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" onClick={() => this.openModal()}/>
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" onClick={() => this.openModal()} />
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" onClick={() => this.openModal()} />
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" onClick={() => this.openModal()} />
                    </div>
                    <div className="pots balconyelement" id="pot3"  onClick={() => this.openModal()}> 
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div> 
                    <div className="pots balconyelement" id="pot4" onClick={() => this.openModal()}> 
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div> 
                    <div className="pots balconyelement" id="pot5" onClick={() => this.openModal()}>
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" /> 
                    </div> 
                    <div className="balconyelement" id="suspendedpot" onClick={() => this.openModal()}> 
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div>
                    <div className="balconyelement" id="climbingtrail" onClick={() => this.openModal()}>
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div>
                    <div className="construction balconyelement" id="construction1" onClick={() => this.openModal()}>
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div> 
                    <div className="construction balconyelement" id="construction2" onClick={() => this.openModal()}>
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" />
                    </div>
                    {this.state.plantStickers.map(sticker => <PlantStickers id={sticker.id} />)}
                </div>
                <div className="helper w-100">
                </div>
                
                <Modal visible={this.state.visible} plants={this.state.plants} width="90%" height="90%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()} id="closeModal">X</a>
                    </div>
                </Modal>
            </div>
            
        
            
                
        );
    }
}

