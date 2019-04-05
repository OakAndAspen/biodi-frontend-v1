import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';
import $ from 'jquery';
import Config from './Config';

const Loading = () => <div>Loading...</div>;

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            localStorage.authKey ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

const Navigation = Loadable({
    loader: () => import('./components/Nav'),
    loading: Loading,
});

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
    })
};

class App extends Component {
    render() {
        return (
            <Router>
                <div id='App'>
                    {/* --- Pages without nav --- */}
                    <Switch>
                        <Route exact path='/' component={publicRoutes.Home}/>
                        <Route exact path='/login' component={publicRoutes.Login}/>
                    </Switch>

                    {/* --- Pages without nav --- */}
                    <div className="row h-100">
                        <div className="col-3">
                            <Switch>
                                <Route path='/dashboard' component={Navigation}/>
                            </Switch>
                        </div>
                        <div className="col-9">
                            <Switch>
                                <Route exact path='/dashboard' component={privateRoutes.Balconies}/>
                                <Route exact path='/dashboard/lausanne' component={privateRoutes.Lausanne}/>
                                <Route exact path='/dashboard/biodi-vers-city' component={privateRoutes.Biodi}/>
                                <Route exact path='/dashboard/birdlife' component={privateRoutes.BirdLife}/>
                                <Route exact path='/dashboard/profil' component={privateRoutes.Account}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authKey: localStorage.authKey,
            loginError: null
        };
        this.render();
        this.keyDown = this.keyDown.bind(this);
        this.login = this.login.bind(this);
    }

    keyDown(e) {
        if (e.keyCode === 13) this.login();
    }

    login() {
        let email = $('#email').val();
        let password = $('#password').val();

        $.ajax({
            method: 'POST',
            url: Config.apiUrl + '/login',
            data: {email: email, password: password},
            context: this
        }).done((data) => {
            if (data.error) this.setState({loginError: data.error});
            else {
                localStorage.authKey = data.authKey;
                this.setState({authKey: data.authKey});
            }
        });
    }

    render() {
        if (this.state.authKey) {
            return <Redirect to='/app/advanced-search'/>;
        }

        let style = {textAlign: 'center'};

        return (
            <div className='row'>
                <form className='col-12 col-md-6 m-auto'>
                    <img src={Config.imgFolder + '/logo.png'} className='img-fluid mt-3 mb-5' alt='MtgManager'/>
                    <input type='text' id='email' className='form-control' placeholder='Email'
                           onKeyDown={this.keyDown} style={style}/>
                    <input type='password' id='password' className='form-control my-2' placeholder='Password'
                           onKeyDown={this.keyDown} style={style}/>
                    <button type='button' className='btn btn-info w-100' id='logIn' onClick={this.login}>
                        Log in
                    </button>
                    <p className="text-muted my-2">No account yet? <Link to="/signup">Sign up!</Link></p>
                    {this.state.loginError ?
                        <div className='alert alert-warning mt-3' role='alert'>
                            {this.state.loginError}
                        </div>
                        : null}
                </form>
            </div>
        );
    }
}

class Logout extends React.Component {
    render() {
        localStorage.clear();
        return <Redirect to='/'/>
    }
}

export default App;
