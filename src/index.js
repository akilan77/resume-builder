import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Createaccount from './components/createaccount';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import Resume1 from './components/resume1';
import * as serviceWorker from './serviceWorker';
import store from './store';

const routing=(
    <Provider store={store}>
        <Router>
            <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/create" component={Createaccount}/>
                 <Route exact path="/resume1" component={Resume1}/>
            </Switch>
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
