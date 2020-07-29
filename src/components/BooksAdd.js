import React from "react";

function BooksAdd(props) {
    const data = props.data;

    return (
        <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name="name"
                           value={data.name}
                           placeholder="Enter name"
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
                           value={data.author}
                           placeholder="Enter author"
                           onChange={props.handleChange}
                           required/>
                </div>
            </div>

            <br/>

            <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={props.handleSubmit}>Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default BooksAdd