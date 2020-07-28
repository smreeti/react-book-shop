import React from 'react'
import BooksManage from "./BooksManage";
import AlertMessageInfo from "./AlertMessageInfo"

class Books extends React.Component {

    constructor() {
        super();
        this.state = ({
            name: "",
            author: "",
            bookList: [],
            showResults: false,
            alertMessageInfo: {
                showMessage: false,
                type: '',
                message: ''
            }
        });
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    validateNameDuplicity = (name) => {
        return (this.state.bookList.filter(book => book.name === name).length > 0);
    };

    handleSubmit = (event) => {
        const newBookItem = {
            name: this.state.name,
            author: this.state.author
        };

        let isNameExists = this.validateNameDuplicity(newBookItem.name);

        if (isNameExists) {
            this.setState({
                name: '',
                author: '',
                bookList: [...this.state.bookList],
                showResults: true,
                alertMessageInfo: {
                    showMessage: true,
                    type: 'error',
                    message: "Book with name '" + newBookItem.name + "' already exists"
                }
            });
        } else {
            this.setState({
                name: '',
                author: '',
                bookList: [...this.state.bookList, newBookItem],
                showResults: true,
                alertMessageInfo: {
                    showMessage: true,
                    type: 'success',
                    message: "Book with name '" + newBookItem.name + "' added successfully"
                }
            });
        }

        event.preventDefault();
    };

    render() {
        return (

            <div className="bs-example">
                <h1> React Book Shop </h1>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   value={this.state.name}
                                   placeholder="Enter name"
                                   onChange={this.handleChange}
                                   required/>
                        </div>
                    </div>
                    <br/>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   name="author"
                                   value={this.state.author}
                                   placeholder="Enter author"
                                   onChange={this.handleChange}
                                   required/>
                        </div>
                    </div>

                    <br/>

                    <div className="form-group row">
                        <div className="col-sm-10 offset-sm-2">
                            <button type="submit"
                                    className="btn btn-primary"
                                    onClick={this.handleSubmit}>Submit
                            </button>
                        </div>
                    </div>
                </form>

                <br/>
                <div>
                    <AlertMessageInfo
                        alertMessageInfo={this.state.alertMessageInfo}
                    />

                    <BooksManage
                        data={this.state.bookList}
                        showResults={this.state.showResults}
                    />
                </div>
            </div>


        )
    }
}

export default Books



