import React from "react";
import BooksAdd from "./BooksAdd";
import BookUpdateModal from "./BookUpdateModal";
import AlertMessageInfo from "./AlertMessageInfo";
import BooksManage from "./BooksManage";
import BookDeleteModal from "./BookDeleteModal";

const AddBooksNav = ({
                         editing,
                         bookAddObj, handleChange, handleSubmit,
                         bookUpdateObj, updateBook, setEditing,
                         alertMessageInfo, showAlertModal,
                         handleCloseModal, bookList, openDeleteModal,
                         openUpdateModal, showDeleteModal, deleteBook,
                     }) => {
    return (
        <div>
            {
                editing === false ? (
                        <BooksAdd
                            bookAddObj={bookAddObj}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        >
                        </BooksAdd>
                    )
                    : (
                        <BookUpdateModal
                            bookUpdateObj={bookUpdateObj}
                            handleChange={handleChange}
                            updateBook={updateBook}
                            setEditing={setEditing}
                        />
                    )
            }

            <br/>

            <AlertMessageInfo
                alertMessageInfo={alertMessageInfo}
                showAlertModal={showAlertModal}
                handleCloseModal={handleCloseModal}
            />

            <BooksManage
                data={bookList}
                openDeleteModal={openDeleteModal}
                openUpdateModal={openUpdateModal}
            />

            <BookDeleteModal showDeleteModal={showDeleteModal}
                             deleteBook={deleteBook}
                             handleCloseModal={handleCloseModal}
            />
        </div>
    )
};

export default AddBooksNav;