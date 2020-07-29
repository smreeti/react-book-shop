import React from "react";
import Modal from "react-modal";

function BookDeleteModal(props) {
    return (
        <div>
            {props.showDeleteModal &&
            <Modal
                isOpen={props.showDeleteModal}
                contentLabel="Minimal Modal Example"
                className="Modal"
                overlayClassName="Overlay"
                onRequestClose={props.handleCloseModal}
            >
                <p> Are you sure you want to delete this Book ?</p>
                <button onClick={props.handleCloseModal}>Close Modal</button>
            </Modal>
            }
        </div>
    )
}

export default BookDeleteModal
