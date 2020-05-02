// NPM Modules
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
// Components
// Containers
import Home from "../Home";
import Reset from "../Authentication/Reset";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import RequestReset from "../Authentication/RequestReset";
// Own modules
import configureStore, { history } from '../../store';
import { initialState } from '../../store/InitialState';
import LocalStorage from '../../utils/Storage';
// Models
// Assets
// CSS

// APP Root Component
export default function App() {

    // Configuro el store, y sincronizo el history del store con el de router
    const store = configureStore(initialState);

    // Render
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/reset" exact component={RequestReset} />
                    <Route path="/reset/:token" exact component={Reset} />
                    <Route path="/activate/:token" exact component={Login} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
