import React from 'react'

import Header from "./Header"
import BooksAdd from "./BooksAdd"
import BooksManage from "./BooksManage"
import AlertMessageInfo from "./AlertMessageInfo"
import BookDeleteModal from "./BookDeleteModal";
import BookUpdateModal from "./BookUpdateModal"

class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            id: 0,
            name: '',
            author: '',
            bookList: [],
            alertMessageInfo: {
                showMessage: false,
                type: '',
                message: ''
            },
            editing: false,
            showDeleteModal: false,
            showAlertModal: false
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
            id: this.state.id + 1,
            name: this.state.name,
            author: this.state.author
        };

        this.resetAlertMessage();

        let isNameExists = this.validateNameDuplicity(newBookItem.name);

        if (isNameExists) {
            this.setState({
                bookList: [...this.state.bookList],
                alertMessageInfo: {
                    showMessage: true,
                    type: 'error',
                    message: "Book with name '" + newBookItem.name + "' already exists"
                }
            });
        } else {
            this.setState({
                bookList: [...this.state.bookList, newBookItem],
                alertMessageInfo: {
                    showMessage: true,
                    type: 'success',
                    message: "Book with name '" + newBookItem.name + "' added successfully"
                }
            });
        }

        this.resetStateParams();
        event.preventDefault();
    };

    handleCloseModal = () => {
        this.setState({
            showDeleteModal: false,
            showAlertModal: false
        });
    };

    openDeleteModal = (id) => {
        console.log("Delete Modal clicked");
        this.resetAlertMessage();
        this.setState({
                showDeleteModal: true,
                id: id
            }
        );
    };

    openUpdateModal = (bookInfo) => {
        console.log("Update Modal clicked");

        this.resetAlertMessage();
        this.setEditing(true);

        this.setState({
                id: bookInfo.id,
                name: bookInfo.name,
                author: bookInfo.author
            }
        );
    };

    deleteBook = () => {
        const updatedBookList = this.state.bookList.filter(book => {
                return book.id !== this.state.id
            }
        );

        this.setState({
            bookList: updatedBookList,
            showDeleteModal: false,
            alertMessageInfo: {
                showMessage: true,
                type: 'success',
                message: "Selected Book deleted successfully"
            }
        });
    };

    resetAlertMessage = () => {
        this.setState({
            alertMessageInfo: {
                showMessage: false,
                type: '',
                message: ''
            },
        })
    };

    resetStateParams = () => {
        this.setState({
            id: '',
            name: '',
            author: '',
            showAlertModal: true
        })
    };

    updateBook = () => {

        console.log("update clicked");

        const updatedBookList = this.state.bookList.filter(book => {
            if (book.id === this.state.id) {
                book.name = this.state.name;
                book.author = this.state.author
            }

            return book;
        });

        this.setState({
            bookList: updatedBookList,
            alertMessageInfo: {
                showMessage: true,
                type: 'success',
                message: "Selected Book updated successfully"
            }
        });

        this.resetStateParams();
    };

    setEditing = (value) => {
        this.setState({
            editing: value
        })
    };

    render() {

        return (
            <div className="book-shop">
                <Header/>

                {
                    this.state.editing === false ? (
                            <BooksAdd
                                data={this.state}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                            />
                        )
                        : (

                            < BookUpdateModal
                                data={this.state}
                                handleChange={this.handleChange}
                                updateBook={this.updateBook}
                                setEditing={this.setEditing}
                            />
                        )
                }

                <br/>

                <AlertMessageInfo
                    alertMessageInfo={this.state.alertMessageInfo}
                    showAlertModal={this.state.showAlertModal}
                    handleCloseModal={this.handleCloseModal}
                />

                <BooksManage
                    data={this.state.bookList}
                    openDeleteModal={this.openDeleteModal}
                    openUpdateModal={this.openUpdateModal}
                />

                <BookDeleteModal showDeleteModal={this.state.showDeleteModal}
                                 deleteBook={this.deleteBook}
                                 handleCloseModal={this.handleCloseModal}
                />


            </div>
        )
    }
}

export default Books;



