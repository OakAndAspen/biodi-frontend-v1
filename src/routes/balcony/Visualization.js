import React from 'react';
import "./Visualization.css";
import Config from "../../Config";
import {Link} from 'react-router-dom';
import $ from 'jquery';



import Modal from "../../components/Modal";
import PlantStickers from "../../components/PlantStickers";

export default class Visualization extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            isLoaded : false,
            isSaved : false,
            plants : [],
            plantStickers:[
            {id: "place1", contient: null, clicked: false},
            {id: "place2", contient: null, clicked: false},
            {id: "place3", contient: null, clicked: false},
            {id: "place4", contient: null, clicked: false},
            {id: "place5", contient: null, clicked: false},
            {id: "place6", contient: null, clicked: false},
            {id: "place7", contient: null, clicked: false},
            {id: "place8", contient: null, clicked: false},
            {id: "place9", contient: null, clicked: false},
            {id: "place10", contient: null, clicked: false},
            {id: "place11", contient: null, clicked: false},
        ],
            currentPlant:null,
            balcony:null,
        };
        
        fetch(Config.apiUrl+'/v1/balconies/'+this.props.match.params.id).then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            balcony: result
          });
            console.log(this.state.balcony);
        },
        
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
            console.error(error);
        }
      )
    
    }
        
        /*
         $.ajax({
            method: "GET",
            url: Config.apiUrl + '/v1/balconies/'+ this.props.match.params.id,
            context: this,
    error: function (xhr) {
        //Here the status code can be retrieved like;
        xhr.status;

        //The message added to Response object in Controller can be retrieved as following.
        xhr.responseText;
    }
        }).done(response => {
                console.log(response);
            }).error(err =>{
             console.error(err);
         });
    }*/
    
       
    
     openModal() {
          
         
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
    closeModalAndAdd (id){
        let table = this.state.plantStickers;
        table[0].contient=id;
        table[0].clicked=true;
        this.setState({
            visible : false,
            plantStickers:table
        });
        console.log(this.state.plantStickers[0]);
    }
    
    renderBalcony(){
        return (
            <div id="balcony">
                    <img src={Config.imgFolder + "/balconyXL.svg"} className="hidden" alt="Balcony" />
                    <div id="iconswrap">
                        
                        <a href="#ancreHelper"><img src={Config.imgFolder + "/icon/information.svg"} alt="plus d'informations" className="icons" /></a>
                        <img src={Config.imgFolder + "/icon/share.svg"} alt="partager" className="icons" />
                        <img src={Config.imgFolder + "/icon/loading.svg"} alt="en cours d'enregistrement" className={"icons " + (this.state.isSaved ? "hiddenIco" : "saving")} /> 
                        <img src={Config.imgFolder + "/icon/tick-inside-circle.svg"} alt="Enregistré !" className={"icons " + (this.state.isSaved ? "" : "hiddenIco")} />
                         <Link to="/dashboard" ><img src={Config.imgFolder + "/icon/cancel.svg"} alt="Fermer" className="icons" /></Link>
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
                    {this.state.plantStickers.map(sticker => 
                                                  <PlantStickers id={sticker.id} etat={sticker.contient} key={sticker.id} contient={sticker.contient}/>
                                                 )}
    </div>
    )
    }
renderHelper(){
    return (
        <div className="bottomBalcony">
            <div className="gradient w-100" >
                <p>Pour une meilleure expérience, switchez votre écran en mode paysage si cela est possible</p>
            </div>
            <div className="helper" id="ancreHelper">
                <h1>Comment réaliser un balcon ?</h1>
                <p>Cette section a pour but de vous aider à réaliser le balcon selon vos souhaits, l'objectif étant de le rendre le plus biodivers possible.</p>
            <h3>Première étape</h3>
            <p>Cliquez sur l'élément du balcon que vous souhaitez remplir : les planches représentent des constructeions (nichoirs, hôtels à insectes, etc.), le treillis vous permettra d'ajouter une plante grimpante, alors que les pots et bacs, suspendus ou non, vous laisseront les remplir de plantes.</p>
            <h3>Deuxième étape</h3>
            <p>Un pop-up va s'ouvrir, vous proposant alors un assortiment de plantes ou constructions les plus adaptés aux paramètres du balcon précédemment remplis. Il vous suffit de cliquer sur votre préférée.</p>
        <h3>Troisième étape</h3>
            <p>Ainsi, les détails de la plante choisie s'affichent, vous permettant ainsi de tout savoir sur son entretien, ce qu'elle attire, etc. Si la plante ne vous convient finalement pas, revenez en arrière grâce au bouton en haut à gauche. Sinon, pressez le bouton validé, et voilà, votre plante est ajoutée à votre balcon ! Un rond proche de l'emplacement rempli devrait vous indiquer quelle plante est dans cet emplacement, si les étapes ont été remplies correctement.</p>
        <p>Procédez ainsi jusqu'à ce que le balcon vous convienne ! La sauvegarde est automatique, donc vous pouvez sans problème quitter et retrouver votre balcon dans l'état dans lequel vous le laissez à n'importe quel moment.'</p>
        <h3>Un doute ?</h3>
        <p>Cliquez sur le rond représentant les plantes dans les emplacements si vous voulez revoir ses informations, ou la modifier.</p>
        <h3>Balcon terminé ?</h3>
        <p>Félicitations ! Vous voilà riche de quelques points supplémentaires pour votre quartier, et de plusieurs informations pour rendre désormais en vrai votre balcon favorable à la biodiversité ! Cliquez sur la croix en haut à droite vous ramenera à votre tableau de bord. Sinon, vous pouvez partager votre balcon sur le forum Biodi-vers-City, et échangez sur votre solution avec la communauté !</p>
            </div>
        </div>
    )
}

   
    render() {
        return (
            <div className="w-100 h-100 container overflow-auto onePage">
               {/* <h1>
                    Visualization for balcony n°{this.props.match.params.id}
                </h1>*/}
                    {this.renderBalcony()}
                
                 {this.renderHelper()}


                
                <Modal visible={this.state.visible} plants={this.state.plants} width="90%" height="90%" effect="fadeInUp" onClick={(id)=> this.closeModalAndAdd(id)}>
                    
                </Modal>
            </div>
            
        
            
                
        );
    }
}

