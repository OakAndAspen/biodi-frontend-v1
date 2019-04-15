import React from 'react';
import "./Map.css";

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: "nope"
        };
    }

    onZoneClick(id) {
        //alert("Clicked on zone " + id);
        this.props.onChoice();
    }
    
     mouseOver = (quart) => {
        this.setState({
            hover: quart
        });
    }
    mouseOut() {
        this.setState({
            hover: "nope"
        });
    }

    render() {
        return (
            <div>
            <svg id="Zones" data-name="Zones" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 1421.23 1101.25">
                <title>quartiers-lausanne</title>
                <path className={"zone "+ (this.props.page==="dash" ? "zoneLau max" : "zoneHover")} id="ouest" onClick={() => this.onZoneClick(1)}  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver("ouest")}
                      d="M804.69,604.19l-19,12-9,13-8-8c-2-23-6-14-6-14v6l-7,3-10-14,6-12-25-17-3,4h-4l-3,4h-6l-18,22c-12-2-5,5-5,5s2,5-8,8,0,6,0,6l-5,10h-4l-5,13h-6s-24,46-8,46c0,0,0,1-16,0s-17,19-17,19l-4,7v7h-7l-3,4-36,11-2,7s1,7-24,5-25,15-25,15l-6-4v7l-11-3-8-1-9,2s3.91,3.13,2.93,4.25c-.59.67-2.93.62-8.93-1.25-16-5-11-17-11-17l-5-13-16,3-7-3-26,5-39-26-6,10s33,20,31,23-13,5-13,5-10,9-15,15-21,22-26,16-18-11-18-11c-30,13-42-6-48-8s-26-35-26-35l4-19v-29l18-1,17,7,8-13-33-20,6-7-3-3,21-25s19,3,22-2a8.22,8.22,0,0,0,0-9h8l-2-9-4-10s-6-6-4-13,1-20,1-20l11-25-3-10,6-3,24,12,31-1-2-70s26-17,33-30c1,0,7,6,7,6l16-16-3-10,18-8-6-16,25-18-28-83-16-22,27-8-11-44,16-6s-19-45-8-95l6-40,11-49,32,9,2,14,19-21,29-17s-4-7,2-6a25,25,0,0,1,10,4l24-7c-.45.36-8.9,7.15-6,13,3,6,3,19,12,26,0,2-2,9-2,9s8,6,11,5,9-4,14-1,8,12,8,12l-5,24,5,5s9,21,7,35,11,12,11,12l15,15h22l4,7h5v8l-4,14,6,3v7l5,3-6,9,5,9,1,7-3,8-1,6h31l15,29s7-6,5,5a69.82,69.82,0,0,0,0,22l6,7,9,7,6,3-7,15,1,11c-8,3-3,8-3,8l9,10c18,6,2,15,2,15l-7,54h-8l-1,7s-6,11-2,8,4,8,4,8l8,11v13l9-5,4,7h-4v7c12,2,12,12,12,12l12,42h4l11,17-8,7-3,9,9,7v11l10,6Z"/>
                <path className={"zone "+ (this.props.page==="dash" ? "zoneLau min" : "zoneHover")} id="est" onClick={() => this.onZoneClick(2)} onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver("est")}
                      d="M1287.19,614.53a44.1,44.1,0,0,0-2.54,4.66c-8,17-8,30-8,30l-41,28-5,8,5,6-5,14-6,10v12l-9,9-6,9-24,11-8,11-8-6-30,17-6,10v6l-5,13,3,20-4,11,9,22-3,16-7,10,2,7-4,5h-10l-8-3-7,3-5-8-8,1-2,7-6,3-6,6-15,2-6,4-7-4-5-6-6,7-9-5-12,8-15-4-5.46.78-16.54-20.78-22,3-7-11c-25,20-89,7-89,7s-7-4-19-7-40-32-43-40,11-34,11-34v-6l2-22,3-3,1-13,14-3-8-4,4-6,22,4,8-14-1-4,5-8-2-8,6-2-2-5,8-9,16-2,3.44-4.81c3.07.33,1.56-2.19,1.56-2.19l-1.56,2.19a23.38,23.38,0,0,1-6.44-2.19c-11-5-9-23-9-23v-20l-3-18,3-5-4-9v-10l-18-8-4-6-14,4-26,4-3-14-10-6v-11l-9-7,3-9,8-7-11-17h-4l-12-42s0-10-12-12v-7h4l-4-7-9,5v-13l-8-11s0-11-4-8,2-8,2-8l1-7h8l7-54s16-9-2-15l-9-10s-5-5,3-8l-1-11,7-15-6-3-9-7-6-7s10-6,10-11,5,0,5,0,5-2,5-9l16-5,2-14s-6-7,6-22l57-19,2,77,9,53,11,9,11,34,35,36,32,8-6,9,3,3-7,10,7,8,18,6,46-30s0,17,13,2,7-19,21-20,18,14,18,14,22-8,27,0,11,38,11,38l26,28s25,25,22,88c0,0,1,14,61-13Z"/>
                <path className={"zone "+ (this.props.page==="dash" ? "zoneLau middle" : "zoneHover")} id="sud" onClick={() => this.onZoneClick(3)} onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver("sud")}
                      d="M975.69,889.19,992.23,910l-8.54,1.22-8,13h-11l-11,8-4,11,2,16-6,9-4,11,1,9,4,9,1,11-4,8-2,13,4,14-6,20,5,20v12l-101-34s-10,2-9-2l-33-14s-8-1-7-3c0,0-27-4-30,0l-3,4-3-2-23,7-2,4-4-6-11,1-8,3-6,12,16,18-28,17,4-16-16-15-9,27-5-3,7-30-42-37-39,15,3-14-26-25-4,1-11-10-18,18,12,13-4,4-38-38,4-12s-43-46-109-44l-11-11-6,7-4-5-2-16-44-1-5,30-48-15s4-13-9-10-2-8-2-8-9.16,0-12.1,1.77c1.9-4.55,6.1-17.77,6.1-17.77l-78-76-21-12-19-13-51-26-36,26-11,6-2,12v-1l-46-95,25-9,17,7s2-23-15-33l19-79,8,5,31-49,25,13v14l66,51,62,22s27,4,31-3l3,3-6,7,33,20-8,13-17-7-18,1v29l-4,19s20,33,26,35,18,21,48,8c0,0,13,5,18,11s21-10,26-16,15-15,15-15,11-2,13-5-31-23-31-23l6-10,39,26,26-5,7,3,16-3,5,13s-5,12,11,17c6,1.87,8.34,1.92,8.93,1.25,1-1.12-2.93-4.25-2.93-4.25l9-2,8,1,11,3v-7l6,4s0-17,25-15,24-5,24-5l33,12s-3,2,20,5l23,3,7-1,24,11,22,9,15,7,5-4,13,4,6-5,28,2,4-4,9,2v8l31,3v9s-14,26-11,34,31,37,43,40,19,7,19,7,64,13,89-7l7,11Z"/>
                <path className={"zone "+ (this.props.page==="dash" ? "zoneLau max2" : "zoneHover")} id="nord" onClick={() => this.onZoneClick(4)} onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver("nord")}
                      d="M1420.69,377.19s-2,12-6,15-20,42-16,59l-1,27,4,17-1,17,1,13-3,18h-22l-5,48s-38,9-62,3c0,0-13.88,6.53-22.46,20.34l-97.54-41.34c-60,27-61,13-61,13,3-63-22-88-22-88l-26-28s-6-30-11-38-27,0-27,0-4-15-18-14-8,5-21,20-13-2-13-2l-46,30-18-6-7-8,7-10-3-3,6-9-32-8-35-36-11-34-11-9-9-53-2-77,28,16,14-15s10,0,15-8-4-7,7-11l9-13h47l3,1s7-11,2-17,4-7,4-7v-7l9-7s-3-18,13-22,8-7,8-7,20,4,37-4c0,0-1,19,25,25l14,15,42,19,19,8,10,24,13,4,2,9,14,10,39-19,2,24,15-4,58,18,30,15,4-5,8,7-2,4,28,14,6-4s14,26,25,28l3-6,19,4s-8,3-8,9a138,138,0,0,0,1,14s-12,22,1,31S1420.69,377.19,1420.69,377.19Z"/>
                <path className={"zone "+ (this.props.page==="dash" ? "zoneLau min2" : "zoneHover")} id="centre" onClick={() => this.onZoneClick(5)} onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver("centre")}
                      d="M886.13,697.38l-3.44,4.81-16,2-8,9,2,5-6,2,2,8-5,8,1,4-8,14-22-4-4,6,8,4-14,3-1,13-3,3-2,22v-3l-31-3v-8l-9-2-4,4-28-2-6,5-13-4-5,4-15-7-22-9-24-11-7,1-23-3c-23-3-20-5-20-5l-33-12,2-7,36-11,3-4h7v-7l4-7s1-20,17-19,16,0,16,0c-16,0,8-46,8-46h6l5-13h4l5-10s-10-3,0-6,8-8,8-8-7-7,5-5l18-22h6l3-4h4l3-4,25,17-6,12,10,14,7-3v-6s4-9,6,14l8,8,9-13,19-12,26-4,14-4,4,6,18,8v10l4,9-3,5,3,18v20s-2,18,9,23A23.38,23.38,0,0,0,886.13,697.38Z"/>
            </svg>
                      {this.props.page==="home" &&
                          <div>
                      <div className="help">
                            Un doute sur votre quartier ?
                          </div>
                      <div id="stiNord" className={"sti "+ (this.state.hover==="nord" ? "hello" : "hiddenSti")}>
                            <h2>Quartier Nord</h2>
                            <ul>
                                <li>La Sallaz</li>
                                <li>Epalinges</li>
                                <li>Sauvabelin</li>
                            </ul>
                        </div>
                       
                        <div id="stiEst" className={"sti "+ (this.state.hover==="est" ? "hello" : "hiddenSti")}>
                            <h2>Quartier Est</h2>
                            <ul>
                                <li>Mon Repos</li>
                                <li>Hermitage</li>
                            </ul>
                        </div>
                              <div id="stiSud" className={"sti "+ (this.state.hover==="sud" ? "hello" : "hiddenSti")}>
                            <h2>Quartier Sud</h2>
                            <ul>
                                <li>Ouchy</li>
                                <li>EPFL</li>
                                <li>Musée Olympique</li>
                                <li>Ecole d'art</li>
                                <li>Tour Haldimann</li>
                                <li>Vidy</li>
                            </ul>
                        </div>   
                        <div id="stiOuest" className={"sti "+ (this.state.hover==="ouest" ? "hello" : "hiddenSti")}>
                            <h2>Quartier Ouest</h2>
                            <ul>
                                <li>Blécherette</li>
                                <li>Stade olympique</li>
                                <li>Malley</li>
                            </ul>
                        </div>
                        <div id="stiCentre" className={"sti "+ (this.state.hover==="centre" ? "hello" : "hiddenSti")}>
                            <h2>Quartier Centre</h2>
                            <ul>
                                <li>Gare centrale</li>
                                <li>Flon</li>
                            </ul>
                        </div>
                                </div>
                    }
{this.props.page==="dash" &&
                    <div>
                         <div className={"score "+ (this.state.hover==="nord" ? "hi" : "hiddenSco")} id="nord">
                            14555
                        </div>
                         <div className={"score "+ (this.state.hover==="est" ? "hi" : "hiddenSco")} id="est">
                            15000
                        </div>
                         <div className={"score "+ (this.state.hover==="sud" ? "hi" : "hiddenSco")} id="sud">
                            22000
                        </div>
                         <div className={"score "+ (this.state.hover==="ouest" ? "hi" : "hiddenSco")} id="ouest">
                            21500
                        </div>
                         <div className={"score "+ (this.state.hover==="centre" ? "hi" : "hiddenSco")} id="centre">
                            12000
                        </div>
                     </div>
                    }
                </div>
        );
    }
}
