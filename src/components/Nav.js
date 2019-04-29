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

    state = {
        open: false
    };

    render() {
        let logoStyle = {
            maxHeight: "70px"
        };

        let navStyle = {
            height: "100%",
            zIndex: "100",
            position: "fixed",
            left: "0",
            backgroundColor: Config.colors.biodiDarkGrey
        };

        return (
            <nav id='Nav' style={navStyle}>
                <div className="w-100 p-3 pointer text-secondary">
                    <i className="fas fa-bars" onClick={() => this.setState({open: !this.state.open})}/>
                </div>
                {this.state.open &&
                <div>
                    <Link to="/dashboard">
                        <img src={Config.imgFolder + "/biodi-clair.png"} alt="Biodi-vers-City"
                             className="img-fluid m-3" style={logoStyle}/>
                    </Link>
                    <ul className='nav w-100 navbar-nav mt-lg-0' id="NavBarContent">
                        {this.entries.map(t => <NavEntry key={t.url} title={t.title} icon={t.icon} url={t.url}/>)}
                    </ul>
                </div>
                }
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
