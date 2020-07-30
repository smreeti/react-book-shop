import React from "react";

function BookUpdateModal(props) {

    const data = props.data;

    return (
        <div>
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               name="name"
                               placeholder="Enter name"
                               value={data.name}
                               onChange={props.handleChange}
                               required/>
                    </div>
                </div>
                <br/>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               name="author"
                               placeholder="Enter author"
                               value={data.author}
                               onChange={props.handleChange}
                               required/>
                    </div>
                </div>
            </form>

            <br/>
            <div>
                <button className="btn btn-success mt-2"
                        onClick={props.updateBook}> Update
                </button>

                <button className="btn btn-info mt-2"
                        onClick={() => props.setEditing(false)}> Cancel
                </button>

            </div>
        </div>
    )
}

export default BookUpdateModal