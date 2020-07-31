import React from 'react'
import {Table} from 'react-bootstrap'

const BooksManage = (props) => {
    return (
        <div>
            {props.data.length > 0 ?

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
                        <tr key={bookInfo.id}>
                            <td>{index + 1}</td>
                            <td>{bookInfo.name}</td>
                            <td>{bookInfo.author}</td>

                            <td>
                                <button onClick={() => props.openUpdateModal(bookInfo)}> Edit</button>
                                <button onClick={() => props.openDeleteModal(bookInfo.id)}> Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                : 'No Records Found'}
        </div>
    )
};

export default BooksManage