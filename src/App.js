import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
import NoMatch from "./routes/NoMatch";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id='App'>
                    <Switch>
                        <Route exact path='/' component={publicRoutes.Home}/>
                        <PublicRoute exact path='/login' component={publicRoutes.Login}/>
                        <Route exact path='/logout' component={privateRoutes.Logout}/>
                        <PrivateRoute exact path='/dashboard' component={privateRoutes.Balconies}/>
                        <PrivateRoute exact path='/dashboard/lausanne' component={privateRoutes.Lausanne}/>
                        <PrivateRoute exact path='/dashboard/biodi-vers-city' component={privateRoutes.Biodi}/>
                        <PrivateRoute exact path='/dashboard/birdlife' component={privateRoutes.BirdLife}/>
                        <PrivateRoute exact path='/dashboard/account' component={privateRoutes.Account}/>
                        <PrivateRoute exact path='/balcony/new' component={privateRoutes.Param}/>
                        <PrivateRoute exact path='/balcony/:id' component={privateRoutes.Visualization}/>
                        <Route path='*' component={NoMatch}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const Loading = () => <div>Loading...</div>;

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            localStorage.authKey ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            )
        }
    />
);

const PublicRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            !localStorage.authKey ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/dashboard', state: {from: props.location}}}/>
            )
        }
    />
);

const publicRoutes = {
    Home: Loadable({
        loader: () => import('./routes/public/Home'),
        loading: Loading,
    }),
    Login: Loadable({
        loader: () => import('./routes/public/Login'),
        loading: Loading,
    })
};

const privateRoutes = {
    Balconies: Loadable({
        loader: () => import('./routes/dashboard/Balconies'),
        loading: Loading,
    }),
    Lausanne: Loadable({
        loader: () => import('./routes/dashboard/Lausanne'),
        loading: Loading,
    }),
    Biodi: Loadable({
        loader: () => import('./routes/dashboard/Biodi'),
        loading: Loading,
    }),
    BirdLife: Loadable({
        loader: () => import('./routes/dashboard/BirdLife'),
        loading: Loading,
    }),
    Account: Loadable({
        loader: () => import('./routes/dashboard/Account'),
        loading: Loading,
    }),
    Logout: Loadable({
        loader: () => import('./routes/dashboard/Logout'),
        loading: Loading,
    }),
    Param: Loadable({
        loader: () => import('./routes/balcony/Param'),
        loading: Loading,
    }),
    Visualization: Loadable({
        loader: () => import('./routes/balcony/Visualization'),
        loading: Loading,
    })
};

export default App;
