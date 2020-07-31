import React from 'react'

import Header from "./Header"
import AddBooksNav from "./nav/AddBooksNav"
import Nav from "./Nav";
import AssignBooksNav from "./nav/AssignBooksNav";

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

                <div className="App">
                    <Nav handleTabChange={this.handleTabChange}
                    />
                    <main className="App-content">
                        {this.renderContent()}
                    </main>
                </div>
            </div>
        )
    }
}

export default App;



