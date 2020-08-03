import React from 'react'

import Header from "./Header"
import AddBooksNav from "./nav/AddBooksNav"
import AssignBooksNav from "./nav/AssignBooksNav";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            activeTab: 0
        });
    }

    renderContent = () => {
        switch (this.state.activeTab) {
            case 0 :
                return <AddBooksNav/>;
            case  1:
                return <AssignBooksNav/>;
            default:
        }
    };

    handleTabChange = (index) => {
        console.log("clicked" + index);

        this.setState({
            activeTab: index
        })
    };


    render() {


        return (
            <div className="book-shop">
                <Header/>

                {/*<div className="App">*/}
                {/*    <Nav handleTabChange={this.handleTabChange}*/}
                {/*    />*/}
                {/*    <main className="App-content">*/}
                {/*        {this.renderContent()}*/}
                {/*    </main>*/}
                {/*</div>*/}


                <Router>
                    <div className="App">
                        <main className="App-content">
                            <div>
                                <NavLink to="/add" exact activeStyle={
                                    {color: 'red'}
                                }>Add Books </NavLink>

                                <NavLink to="/assign" exact activeStyle={
                                    {color: 'green'}
                                }>Assign Books </NavLink>
                            </div>
                        </main>

                    </div>

                    <Switch>
                        <Route path="/add" component={AddBooksNav}/>
                        <Route path="/assign" component={AssignBooksNav}/>

                        <Route component={AddBooksNav}/>
                    </Switch>

                </Router>
            </div>
        )
    }
}

export default App;



