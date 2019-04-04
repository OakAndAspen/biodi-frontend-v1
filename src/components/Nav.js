import React from 'react';
import {Link} from "react-router-dom";
import "./Nav.css";

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
            'url': '/dashboard/profil',
            'title': 'Mon compte',
            'icon': 'fas fa-user'
        },
        {
            'url': '/deconnexion',
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
            <nav id='Nav' className='w-25 d-inline-block'>
                <div className="p-4">
                <img src="images/biodi-vert.png" alt="Biodi-vers-City" className="img-fluid"/>
                </div>
                <ul className='nav flex-column'>
                    {this.state.entries.map(function (t) {
                        return <NavEntry key={t.url} title={t.title} icon={t.icon} url={t.url}/>;
                    }, this)}
                </ul>
            </nav>
        );
    }
}

const NavEntry = ({title, icon, url}) => {
    return (
        <li className='NavEntry nav-item pointer w-100'>
            <Link to={url} className='nav-link'>
                <i className={'text-center mr-2 ' + icon}/>
                <span>{title}</span>
            </Link>
        </li>
    );
};
