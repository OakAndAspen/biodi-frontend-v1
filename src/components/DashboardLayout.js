import React from 'react';
import Nav from "./Nav";
import "./DashboardLayout.css";

export default class DashboardLayout extends React.Component {
    render() {
        return (
            <div className="bg-light">
                <div id="DashboardLayout">
                    <Nav/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
