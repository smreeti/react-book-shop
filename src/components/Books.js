import React from 'react'

import Header from "./Header"
import BooksAdd from "./BooksAdd"
import BooksManage from "./BooksManage"
import AlertMessageInfo from "./AlertMessageInfo"
import BookDeleteModal from "./BookDeleteModal";

class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            name: '',
            author: '',
            bookList: [],
            showResults: false,
            alertMessageInfo: {
                showMessage: false,
                type: '',
                message: ''
            },
            showDeleteModal: false
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

    openDeleteModal = () => {
        console.log("modal clicked");

        this.setState({
                showDeleteModal: true
            }
        );
    };

    handleCloseModal = () => {
        this.setState({showDeleteModal: false});
    };

    render() {
        return (
            <div className="book-shop">
                <Header/>

                <BooksAdd
                    data={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                <br/>

                <AlertMessageInfo
                    alertMessageInfo={this.state.alertMessageInfo}
                />

                <BooksManage
                    data={this.state.bookList}
                    showResults={this.state.showResults}
                    openDeleteModal={this.openDeleteModal}
                />

                <BookDeleteModal showDeleteModal={this.state.showDeleteModal}
                                 handleCloseModal={this.handleCloseModal}
                />


            </div>
        )
    }
}

export default Books;



