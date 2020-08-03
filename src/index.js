import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import AddBooksNav from "./components/nav/AddBooksNav";
import AssignBooksNav from "./components/nav/AssignBooksNav";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
// import * as serviceWorker from './serviceWorker';

const routing = (

    <div className="book-shop">
        <Router>
            <div className="App">
                <div className="App-content">
                    <div>
                        <NavLink to="/" activeStyle={
                            {color: 'red'}
                        }>Add Books </NavLink>

                        <NavLink to="/assign" activeStyle={
                            {color: 'green'}
                        }>Assign Books </NavLink>
                    </div>
                </div>

            </div>

            <Switch>
                <Route path="/" exact component={AddBooksNav}/>

                <Route path="/assign" component={AssignBooksNav}/>

                <Route component={AddBooksNav}/>
            </Switch>

        </Router>
    </div>
);


ReactDOM.render(
    routing,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
