import React, { Component } from "react";
import API from "../utils/API";
import Bookinput from "../components/Bookinput/Bookinput";
import Header from "../components/Header/Header";
import Book from "../components/Book/Book";

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    };

handleSearch = event => {
        this.setState ({ search: event.target.value })

    }

    handleSubmit = event => {
        event.preventDefault();
        API.getGoogle(this.state.search)
        .then(res => {
            if (res.data.items === "errors") {
                throw new Error(res.data.items);
            }
            else {
                let results = res.data.items
                results = results.map(books => {
                    books = {
                        key: books.id,
                        id: books.id,
                        title: books.volumeInfo.title,
                        description: books.volumeInfo.description,
                        author: books.volumeInfo.author,
                        image: books.volumeInfo.imageLinks.thumbnail
                    }
                    return books;
                })
                this.setState ({ books: results, search: ""})
            }
        })
        .catch(err => this.setState({ error: err.items }));
    }

    saveButton = event => {
        event.preventDefault();
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        API.saveBook (savedBooks)
        .then(console.log(savedBooks))
        .catch(err => console.log(err))

    };

render () {
    return (
        <div>
            <Header/>
            <div>
                <h6>Saved Books</h6>
                <Bookinput 
                handleSearch={this.handleSearch}
                handleSubmit = {this.handleSubmit}
                searchTerm = {this.search}/>
                
            </div>

            <div>
                <h6>Results</h6>
                <Book booksave = {this.state.books} 
                saveButton = {this.saveButton}/>

            </div>
            
   
        </div>
     
    );
}}




export default Search;