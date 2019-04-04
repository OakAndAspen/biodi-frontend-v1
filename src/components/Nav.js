import React from 'react';
import {Link} from "react-router-dom";

export default class Nav extends React.Component {

    entries = [
        {
            'url': '/dashboard/balcons',
            'title': 'Mes balcons',
            'icon': 'fas fa-search'
        },
        {
            'url': '/dashboard/lausanne',
            'title': 'Lausanne',
            'icon': 'fas fa-copy'
        },
        {
            'url': '/dashboard/biodi-vers-city',
            'title': 'Biodi-vers-City',
            'icon': 'fas fa-chart-pie'
        },
        {
            'url': '/dashboard/birdlife',
            'title': 'BirdLife',
            'icon': 'fas fa-boxes'
        },
        {
            'url': '/dashboard/profil',
            'title': 'Mon compte',
            'icon': 'fas fa-dollar-sign'
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
            <nav id='Nav'>
                <ul className='nav flex-column'>
                    {this.state.entries.map(function (t) {
                        return <NavEntry key={t.url} title={t.title} icon={t.icon} url={t.url}/>;
                    }, this)}
                </ul>
            </nav>
        );
    }
}

const NavEntry = ({title, icon, url, onClick}) => {
    return (
        <li className='NavEntry nav-item pointer w-100'>
            <Link to={url} className='nav-link' onClick={onClick}>
                <i className={'text-center mr-2 ' + icon}/>
                <span className="text-light">{title}</span>
            </Link>
        </li>
    );
};
