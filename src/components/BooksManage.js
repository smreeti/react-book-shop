import React from 'react'
import {Table} from 'react-bootstrap'

function BooksManage(props) {
    return (
        <div className={props.showResults ? '' : 'hidden'}>

            <Table striped bordered hover>
                <thead>
                <tr>

                    <th>S.N.</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>

                {props.data.map((bookInfo, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{bookInfo.name}</td>
                        <td>{bookInfo.author}</td>

                        <td>
                            <button> Edit</button>
                            <button> Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default BooksManage