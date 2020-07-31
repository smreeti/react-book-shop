import React from 'react'

import Header from "./Header"
import AddBooksNav from "./AddBooksNav"
import Nav from "./Nav";
import AssignBooksNav from "./AssignBooksNav";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            activeTab: 0,
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

    renderContent = () => {

        const bookAddObj = {
            name: this.state.name,
            author: this.state.author
        };

        const bookUpdateObj = {
            name: this.state.name,
            author: this.state.author
        };

        switch (this.state.activeTab) {
            case 0 :
                return <AddBooksNav
                    editing={this.state.editing}
                    bookAddObj={bookAddObj}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    bookUpdateObj={bookUpdateObj}
                    updateBook={this.updateBook}
                    setEditing={this.setEditing}
                    alertMessageInfo={this.state.alertMessageInfo}
                    showAlertModal={this.state.showAlertModal}
                    handleCloseModal={this.handleCloseModal}
                    bookList={this.state.bookList}
                    openDeleteModal={this.openDeleteModal}
                    openUpdateModal={this.openUpdateModal}
                    showDeleteModal={this.state.showDeleteModal}
                    deleteBook={this.deleteBook}
                />;
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
            id: this.state.bookList.length + 1,
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



