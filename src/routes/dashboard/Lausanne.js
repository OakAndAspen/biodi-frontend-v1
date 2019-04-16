import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import Map from '../../components/Map';

import "./Lausanne.css";

export default class Lausanne extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DashboardLayout>

                <div className="container">
                    {/* Logo Biodi */}
                
                    <div className="row">
                        <div className="col-12 my-3 wrapMap">
                            <Map onChoice={id => this.setState({popupOn: true})} page="dash" />
                        </div>
                    </div>
                <div>
                    <h2>Aidez votre quartier à être le plus Biodi de tous ! </h2>
                    <p>En invitant vos amis à s’inscire, en continuant de réaliser vos balcons de rêves ou en participant à notre forum, vous gagnez des points afin de rendre votre quartier toujours plus vert ! Serrez-vous les coudes, et bonne chance pour être les meilleurs !</p>
                    <p>Actuellement, vous avez ramené <strong>42</strong> points pour votre quartier, continuez comme ça ! </p>
                </div>
                </div>
            </DashboardLayout>
        );
    }
}
