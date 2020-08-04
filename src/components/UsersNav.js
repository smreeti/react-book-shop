import React from "react";
import axios from 'axios';

class UsersNav extends React.Component {
    state = {
        name: '',
        users: []
    };

    componentDidMount() {
        try{
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.setState({
                            users: response.data
                        }
                    )
                })
        }catch (e) {
            console.log(e);
        }
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

        axios.post('https://jsonplaceholder.typicode.com/users/', {newUserObj})
            .then(response => {
                console.log(response.data);
                this.setState({
                    users: [...this.state.users, response.data.newUserObj]
                })
            })

    };

    render() {

        return (
            <div>
                <h1> Available users</h1>

                {this.state.users.map(user =>
                    <li key={user.id}>  {user.name}</li>
                )}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        User Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>

        );
    }
}

export default UsersNav;