import React from "react";
import AssignBooks from "../assignBooks/AssignBooks";
import bookCategoryData from "../bookCategoryData";
import AssignBookManage from "../assignBooks/AssignBookManage";

class AssignBooksNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            name: '',
            bookCategoryId: '',
            bookCategoryList: bookCategoryData,
            assignedBookList: []
        });
    }

    handleChange = (event) => {

        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    assignBook = (event) => {
        console.log("Assign Book Button Clicked");
        event.preventDefault();

        let bookCategoryName = "";

        this.state.bookCategoryList.map(bookCategory => {
            if (bookCategory.id === parseInt(this.state.bookCategoryId)) {
                bookCategoryName = bookCategory.name;
                return bookCategoryName;
            }

            return "";
        });

        const newBookObj = {
            bookCategoryId: this.state.bookCategoryId,
            name: this.state.name,
            bookCategoryName: bookCategoryName
        };

        this.setState({
            assignedBookList: [...this.state.assignedBookList, newBookObj]
        })
    };

    render() {
        return (
           <React.Fragment>
                <AssignBooks
                    name={this.state.name}
                    bookCategoryList={this.state.bookCategoryList}
                    handleChange={this.handleChange}
                    assignBook={this.assignBook}
                />

                <AssignBookManage
                    assignedBookList={this.state.assignedBookList}
                />
           </React.Fragment>
        )
    }
}

export default AssignBooksNav