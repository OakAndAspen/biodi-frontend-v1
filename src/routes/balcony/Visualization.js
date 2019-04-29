import React from 'react';
import "./Visualization.css";
import Config from "../../Config";
import {Link} from 'react-router-dom';
import Modal from "../../components/Modal";
import PlantStickers from "../../components/PlantStickers";

export default class Visualization extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isLoaded: false,
            isSaved: true,
            plantStickers: [],
            currentPlant: null,
            currentPot: null,
            isAlreadyFill: false
        };
    }

    componentDidMount() {
        this.fetchBalcony();
    }

    fetchBalcony() {
        fetch(Config.apiUrl + '/v1/balconies/' + this.props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        plantStickers: result
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

    openModal(idPot) {
        this.setState({
            currentPot: idPot,
            visible: true,
        });
    }

    closeModal() {
        this.setState({
            visible: false,
            currentPlant: null,
            currentPot: null
        });
        if (this.state.isAlreadyFill) {
            this.setState({
                isAlreadyFill: false
            });
        }
    }

    closeModalAndAdd(id) {
        let data = {
            idContent: id,
            location: this.state.currentPot
        };
        fetch(Config.apiUrl + '/v1/balconies/' + this.props.match.params.id + '/contents', {
            method: 'PATCH',
            body: JSON.stringify(data),
        }).then(
            () => {
                this.fetchBalcony();
            }).then(
            () => {
                this.setState({
                    visible: false,
                    currentPlant: null,
                    currentPot: null,
                    isSaved: true
                });
            })

    }

    returnToModal(id){
        this.setState({
            currentPlant:null,
            currentPot: id,
            isAlreadyFill:false,
            visible:false
        }, () => {
            this.openModal(id);
        });
    }

    closeModalAndDelete() {
        let data = {
            idContent: null,
            location: this.state.currentPot
        };
        fetch(Config.apiUrl + '/v1/balconies/' + this.props.match.params.id + '/contents', {
            method: 'PATCH',
            body: JSON.stringify(data),
        }).then(
            () => {
                this.fetchBalcony();
            }).then(
            () => {
                this.setState({
                    visible: false,
                    currentPlant: null,
                    currentPot: null,
                    isSaved: true,
                    isAlreadyFill: false
                });
            })
    }

    isFilled(id) {
        let isFilled = false;
        for (let ps of this.state.plantStickers) {
            if (ps.location == id) isFilled = true;
        }
        return isFilled;
    }

    render() {
        return (
            <div className="w-100 h-100 container overflow-auto onePage" id="Visualization">
                {this.renderBalcony()}
                {this.renderHelper()}

                <Modal visible={this.state.visible} width="90%" height="90%" effect="fadeInUp"
                       plant={this.state.currentPlant} currentBalcony={this.props.match.params.id}
                       pot={this.state.currentPot} stickOrNot={this.state.isAlreadyFill}
                       onClose={() => this.closeModal()}
                       onClickAdd={(id) => this.closeModalAndAdd(id)}
                       onClickDelete={() => this.closeModalAndDelete()}
                       onClickCard={(id) => this.setState({currentPlant: id})}
                       onClickBack={() => this.returnToModal(this.state.currentPot)} />
            </div>
        );
    }

    renderBalcony() {
        return (
            <div id="balcony">
                <img src={Config.imgFolder + "/balconyXL.svg"} className="hidden" alt="Balcony"/>
                <div id="iconswrap">
                    <a href="#ancreHelper">
                        <img src={Config.imgFolder + "/icon/information.svg"} className="icons"
                             alt="Plus d'informations" title="Plus d'informations"/>
                    </a>
            {/*<img src={Config.imgFolder + "/icon/share.svg"} className="icons"
                         alt="Partager" title="Partager"/>*/}
                    <img src={Config.imgFolder + "/icon/loading.svg"}
                         className={"icons " + (this.state.isSaved ? "hiddenIco" : "saving")} data-toggle="tooltip"
                         alt="En cours d'enregistrement" title="En cours d'enregistrement"/>
                    <img src={Config.imgFolder + "/icon/tick-inside-circle.svg"}
                         className={"icons " + (this.state.isSaved ? "" : "hiddenIco")}
                         alt="Enregistré !" title="Enregistré !"/>
                    <Link to="/dashboard">
                        <img src={Config.imgFolder + "/icon/cancel.svg"} className="icons"
                             alt="Fermer" title="Fermer"/>
                    </Link>
                </div>
                <div
                    className={"balconyelement " + (this.isFilled(1) || this.isFilled(2) || this.isFilled(3) || this.isFilled(4) ? "full" : "")}
                    id="bac">
                    <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" onClick={() => this.openModal(1)}
                         className={(this.isFilled(1) ? "fullbac" : "")}/>
                    <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" onClick={() => this.openModal(2)}
                         className={(this.isFilled(2) ? "fullbac" : "")}/>
                    <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" onClick={() => this.openModal(3)}
                         className={(this.isFilled(3) ? "fullbac" : "")}/>
                    <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus" onClick={() => this.openModal(4)}
                         className={(this.isFilled(4) ? "fullbac" : "")}/>
                </div>

                <div className={"pots balconyelement " + (this.isFilled(5) ? "full" : "")} id="pot3"
                     onClick={() => this.openModal(5)}>
                    {this.isFilled(5) ?
                        ''
                        :
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus"/>
                    }
                </div>
                <div className={"pots balconyelement " + (this.isFilled(6) ? "full" : "")} id="pot4"
                     onClick={() => this.openModal(6)}>
                    {this.isFilled(6) ?
                        ''
                        :
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus"/>
                    }
                </div>
                <div className={"pots balconyelement " + (this.isFilled(7) ? "full" : "")} id="pot5"
                     onClick={() => this.openModal(7)}>
                    {this.isFilled(7) ?
                        ''
                        :
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus"/>
                    }
                </div>
                <div className={"balconyelement " + (this.isFilled(8) ? "full" : "")} id="suspendedpot"
                     onClick={() => this.openModal(8)}>
                    {this.isFilled(8) ?
                        ''
                        :
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus"/>
                    }
                </div>
                <div className={"balconyelement " + (this.isFilled(9) ? "full" : "")} id="climbingtrail"
                     onClick={() => this.openModal(9)}>
                    {this.isFilled(9) ?
                        ''
                        :
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus"/>
                    }
                </div>
                <div className={"construction balconyelement " + (this.isFilled(10) ? "full" : "")} id="construction1"
                     onClick={() => this.openModal(10)}>
                    {this.isFilled(10) ?
                        ''
                        :
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus"/>
                    }
                </div>
                <div className={"construction balconyelement " + (this.isFilled(11) ? "full" : "")} id="construction2"
                     onClick={() => this.openModal(11)}>
                    {this.isFilled(11) ?
                        ''
                        :
                        <img src={Config.imgFolder + "/icon/plus.svg"} alt="Plus"/>
                    }
                </div>
                {this.state.plantStickers.map(sticker =>
                    <PlantStickers id={"place" + sticker.location} etat={sticker._content} key={sticker.id}
                                   contient={sticker._content} image={sticker.imgSrc} onClick={() =>
                        this.setState({
                            currentPlant: sticker._content,
                            isAlreadyFill: true
                        }, () => {
                            this.openModal(sticker.location)
                        })
                    }/>
                )}

            </div>
        )
    }

    renderHelper() {
        return (
            <div className="bottomBalcony">
                <div className="gradient w-100">
                    <p>Pour une meilleure expérience, switchez votre écran en mode paysage si cela est possible</p>
                </div>
                <div className="helper" id="ancreHelper">
                <a href="#balcony"><i className="fas fa-arrow-up"></i></a>
                    <h1>Comment réaliser un balcon ?</h1>
                    <p>Cette section a pour but de vous aider à réaliser le balcon selon vos souhaits, l'objectif étant
                        de le rendre le plus biodivers possible.</p>
                    <h3>Première étape</h3>
                    <p>Cliquez sur l'élément du balcon que vous souhaitez remplir : les planches représentent des
                        constructeions (nichoirs, hôtels à insectes, etc.), le treillis vous permettra d'ajouter une
                        plante grimpante, alors que les pots et bacs, suspendus ou non, vous laisseront les remplir de
                        plantes.</p>
                    <h3>Deuxième étape</h3>
                    <p>Un pop-up va s'ouvrir, vous proposant alors un assortiment de plantes ou constructions les plus
                        adaptés aux paramètres du balcon précédemment remplis. Il vous suffit de cliquer sur votre
                        préférée.</p>
                    <h3>Troisième étape</h3>
                    <p>Ainsi, les détails de la plante choisie s'affichent, vous permettant ainsi de tout savoir sur son
                        entretien, ce qu'elle attire, etc. Si la plante ne vous convient finalement pas, revenez en
                        arrière grâce au bouton en haut à gauche. Sinon, pressez le bouton validé, et voilà, votre
                        plante est ajoutée à votre balcon ! Un rond proche de l'emplacement rempli devrait vous indiquer
                        quelle plante est dans cet emplacement, si les étapes ont été remplies correctement.</p>
                    <p>Procédez ainsi jusqu'à ce que le balcon vous convienne ! La sauvegarde est automatique, donc vous
                        pouvez sans problème quitter et retrouver votre balcon dans l'état dans lequel vous le laissez à
                        n'importe quel moment.'</p>
                    <h3>Un doute ?</h3>
                    <p>Cliquez sur le rond représentant les plantes dans les emplacements si vous voulez revoir ses
                        informations, ou la modifier.</p>
                    <h3>Balcon terminé ?</h3>
                    <p>Félicitations ! Vous voilà riche de quelques points supplémentaires pour votre quartier, et de
                        plusieurs informations pour rendre désormais en vrai votre balcon favorable à la biodiversité !
                        Cliquez sur la croix en haut à droite vous ramenera à votre tableau de bord. Sinon, vous pouvez
                        partager votre balcon sur le forum Biodi-vers-City, et échangez sur votre solution avec la
                        communauté !</p>
                </div>
            </div>
        )
    }
}

