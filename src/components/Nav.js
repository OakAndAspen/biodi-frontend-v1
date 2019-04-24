import React from 'react';
import {Link} from "react-router-dom";
import "./Nav.css";
import Config from "../Config";
import "bootstrap/dist/js/bootstrap.min";

export default class Nav extends React.Component {

    entries = [
        {
            'url': '/dashboard',
            'title': 'Mes balcons',
            'icon': 'fas fa-leaf'
        },
        {
            'url': '/dashboard/lausanne',
            'title': 'Lausanne',
            'icon': 'fas fa-map-marker-alt'
        },
        {
            'url': '/dashboard/biodi-vers-city',
            'title': 'Biodi-vers-City',
            'icon': 'fas fa-info'
        },
        {
            'url': '/dashboard/birdlife',
            'title': 'BirdLife',
            'icon': 'fas fa-info'
        },
        {
            'url': '/dashboard/supply',
            'title': 'Où me fournir?',
            'icon': 'fas fa-info'
        },
        {
            'url': '/dashboard/account',
            'title': 'Mon compte',
            'icon': 'fas fa-user'
        },
        {
            'url': '/logout',
            'title': 'Déconnexion',
            'icon': 'fas fa-sign-out-alt'
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    }

    render() {
        let logoStyle = {
            maxHeight: "70px"
        };
        return (
            <nav id='Nav' className="d-inline-block d-sm-block">
                <div className="row">
                    <div className="col-3 d-md-none p-3 align-items-center">
                        <button className="btn"
                                onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                            <i className="fas fa-bars text-secondary"/>
                        </button>
                    </div>
                    <div className="col-9 col-md-12 p-3 text-right">
                        <Link to="/dashboard">
                            <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City"
                                 className="img-fluid" style={logoStyle}/>
                        </Link>
                    </div>
                </div>
                <ul className={'nav w-100' + this.state.collapsed ? " d-none" : ""} id="NavBarContent">
                    {this.entries.map(t => <NavEntry key={t.url} title={t.title} icon={t.icon} url={t.url}/>)}
                </ul>
            </nav>
        );
    }
}

const NavEntry = ({title, icon, url}) => {
    return (
        <li className='NavEntry nav-item pointer w-100' title={title}>
            <Link to={url} className='nav-link w-100 text-left'>
                <i className={'text-center w-25 mr-2 ' + icon}/>
                <span>{title}</span>
            </Link>
        </li>
    );
};
