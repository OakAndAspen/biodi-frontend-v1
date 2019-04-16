import React from 'react';
import Nav from "./Nav";

export default class DashboardLayout extends React.Component {
    render() {
        return (
            <div className="h-100 bg-light">
                <div className="row h-100" id="NavWrapper">
                    <div className="col-3 h-100">
                        <Nav/>
                    </div>
                    <div className="col-9 h-100 overflow-auto">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
