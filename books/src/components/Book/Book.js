import React from "react";


const Book = props => {
    return (
        <div>
            {props.savedBooks.map(booksave => {
                return (
                      <div className="card text-center">
                    <div className="card-header">
                        <h3>{booksave.title}</h3>

                        <p>{booksave.author}</p>
                    </div>
                    <div className="card-body">
                        <div className="col-md-4">
                            <img src={booksave.image} alt={booksave.title} />
                        </div>
                        <p className="card-text">{booksave.description}</p>
                        <button  className="btn btn-primary" onclick = {() => props.deleteButton(booksave.id)}>Delete</button>
                    </div>

                </div>


                );
              
            })
            }




        </div>

    );
}

export default Book;

