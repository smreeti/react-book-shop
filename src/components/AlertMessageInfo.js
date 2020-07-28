import React from 'react'

function AlertMessageInfo(props) {
    return (
        <div
            className={props.alertMessageInfo.showMessage ?
                (props.alertMessageInfo.type === 'success' ? 'success' : 'error')
                : 'hidden'}
        >
            {props.alertMessageInfo.message}
        </div>
    )
}

export default AlertMessageInfo;