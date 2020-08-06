import React from "react";
import API from '../../axios-interceptor'
import AddUser from "../availableUsers/AddUser";
import AvailableUserHeader from "../availableUsers/AvailableUserHeader";
import AvailableUsers from "../availableUsers/AvailableUsers";

class UsersNav extends React.Component {
    state = {
        name: '',
        users: []
    };

    componentDidMount() {
        API.get('/users')
            .then(response => {
                this.setState({
                    /*Here response is the data we need, since response interceptor already retrieved it
                    * so we no longer need to use response.data anymore.*/

                        users: response
                    }
                )
            })
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const newUserObj = {
            id: this.state.users.length + 1,
            name: this.state.name
        };

        API.post('/users/', {newUserObj})
            .then(response => {
                console.log(response);
                this.setState({
                    users: [...this.state.users, response.newUserObj]
                })
            })

    };

    render() {
        return (
            <div>
                <AvailableUserHeader/>

                <AvailableUsers users={this.state.users}/>

                <AddUser handleChange={this.handleChange}
                         handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default UsersNav;