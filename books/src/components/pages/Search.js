import { Component } from "react";
import Booksearch from "../Bookinput/Bookinput";
import Header from "../Header/Header";

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    };
render () {
    return (
        <div>
            <Header/>
            <div>
                <h6>Saved Books</h6>
                <Booksearch/>
            </div>

            <div>
                <h6>Results</h6>
            </div>
            
   
        </div>
     
    );
}}




export default Search;