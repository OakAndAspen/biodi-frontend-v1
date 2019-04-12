import React from 'react';
import DashboardLayout from "../../DashboardLayout";
import Map from '../../components/Map';

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
                            <Map onChoice={id => this.setState({popupOn: true})}/>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        );
    }
}
