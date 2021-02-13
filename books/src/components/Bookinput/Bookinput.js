import React from "react";


function Booksearch(props) {
  return (
        <div>
             <h5>Book Search</h5>
        <input type="text" onChange={props.handleSearch}value={props.searchTerm} placeholder="Please type book here" {...props}/>
        <button onClick={props.handleSubmit(props.searchTerm)}>Search</button>
        </div>
        );
    
}

export default Booksearch;