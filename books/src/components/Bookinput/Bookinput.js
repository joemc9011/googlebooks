import React, { useState } from "react";


function Booksearch(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch=()=>{
        //api
        ///api/book/search
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div>
             <h5>Book Search</h5>
        <input type="text" onChang={handleChange}value={searchTerm} placeholder="Please type book here" {...props}/>
        <button onClick={handleSearch}>Search</button>
        </div>
       

        );
}

export default Booksearch;