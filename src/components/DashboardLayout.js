import React from 'react';
import Nav from "./Nav";
import Config from "../Config";

export default class DashboardLayout extends React.Component {
    render() {
        let wrapperStyle = {
            paddingLeft: "50px",
            backgroundColor: Config.colors.biodiPastel,
            minHeight: "100%"
        };
        return (
            <div className="bg-light h-100">
                <div id="DashboardLayout" className="h-100 overflow-auto">
                    <Nav/>
                    <div style={wrapperStyle}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
