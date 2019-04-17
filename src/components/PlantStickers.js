import React from 'react';
import Config from "../Config";

export default class PlantStickers extends React.Component {

   

    constructor(props) {
        super(props);
        this.state = {};
        
      
    }
    
  
   seeDetails(id) {
          this.props.onClick();
         
        this.setState({
            visible : true,
            
        });
    }
  

    render() {
        const stylesStick = {
            backgroundImage: 'url(' + Config.imgFolder+'/'+ this.props.image + ')',
            overflow: 'hidden',
        }
        return (
            <div className={"places "+ (this.props.etat!=null ? "full" : "hiddenPlaces")} id={this.props.id} style={stylesStick} onClick={() => this.seeDetails(this.props.id)}>
            </div>
        );
    }
    
  
}




