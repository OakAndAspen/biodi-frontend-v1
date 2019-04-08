import React from 'react';
import {Link} from "react-router-dom";
import "./Nav.css";
import Config from "../Config";

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
            entries: this.entries
        };
    }

    render() {
        return (
            <nav id='Nav' className="h-100">
                <div className="p-2 p-md-4">
                    <Link to="/dashboard">
                        <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City"
                             className="img-fluid d-none d-md-block"/>
                        <img src={Config.imgFolder + "/biodi-logo-clair.png"} alt="Biodi-vers-City"
                             className="img-fluid d-md-none"/>
                    </Link>
                </div>
                <ul className='nav flex-column'>
                    {this.state.entries.map(t => {
                        return <NavEntry key={t.url} title={t.title} icon={t.icon} url={t.url}/>;
                    }, this)}
                </ul>
            </nav>
        );
    }
}

const NavEntry = ({title, icon, url}) => {
    return (
        <li className='NavEntry nav-item pointer w-100' title={title}>
            <Link to={url} className='nav-link w-100 text-center text-md-left'>
                <i className={'text-center w-25 mr-2 ' + icon}/>
                <span className="d-none d-md-inline-block">{title}</span>
            </Link>
        </li>
    );
};
