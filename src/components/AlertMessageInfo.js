import React from 'react'
import Modal from "react-modal";

function AlertMessageInfo(props) {
    return (
        <div>
            {props.alertMessageInfo.showMessage &&
            <Modal
                isOpen={props.showAlertModal}
                contentLabel="Minimal Modal Example"
                className="Modal"
                overlayClassName="Overlay"
                ariaHideApp={false}
                onRequestClose={props.handleCloseModal}
            >
                < p className={props.alertMessageInfo.type === 'success' ? 'success' : 'error'}>
                    {props.alertMessageInfo.message}</p>

                <div>
                    <button onClick={props.handleCloseModal}>Close</button>
                </div>
            </Modal>
            }
        </div>
    )
}

export default AlertMessageInfo;