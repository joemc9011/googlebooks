import React from "react";


function Book() {
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    <h3>Book Title</h3>
                    <p>Synopsis</p>
                    <p>Author</p>
                </div>
                <div className="card-body">
                    <div className="col-md-4">
                        <img src="{...}" alt="..." />
                    </div>
                    <p className="card-text"> Book info paragragh</p>
                    <a href="#" className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-primary">Delete</a>
                </div>

            </div>




        </div>

    );
}

export default Book;

