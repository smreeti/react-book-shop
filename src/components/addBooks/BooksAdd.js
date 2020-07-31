import React from "react";

const BooksAdd = (props) => {
    const {bookAddObj, handleChange, handleSubmit} = props;

    return (
        <form>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name="name"
                           value={bookAddObj.name}
                           placeholder="Enter name"
                           onChange={handleChange}
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
                           value={bookAddObj.author}
                           placeholder="Enter author"
                           onChange={handleChange}
                           required/>
                </div>
            </div>

            <br/>

            <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}>Submit
                    </button>
                </div>
            </div>
        </form>
    )
};

export default BooksAdd