import React from 'react';
import './private.css';
import './BootstrapColorsOverwrite.css';


export default class BootstrapColorsOverwrite extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let colors = ["primary", "secondary", "info", "success", "warning", "danger", "light", "dark"];
        return (
            <div id="Wrap" className="h-100">
                {colors.map(c => {
                    return (
                        <div className={"p-3 m-2 rounded border border-" + c}>
                            <h2>{c}</h2>
                            <button className={"m-2 btn btn-" + c}>Button</button>
                            <button className={"m-2 btn btn-outline-" + c}>Button with outline</button>
                            <span className={"m-2 alert alert-" + c}>Alert</span>
                            <span className={"m-2 p-2 badge badge-" + c}>Badge</span>
                            <span className={"m-2 text-" + c}>Text</span>
                            <div className={"m-2 p-2 d-inline-block bg-" + c}>Background</div>

                        </div>
                    );
                })}
            </div>
        );
    }
}
