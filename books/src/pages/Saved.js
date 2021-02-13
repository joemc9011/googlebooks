import React, {Component} from "react";

import Book from "../components/Book/Book";
import Header from "../components/Header/Header";
import API from "../utils/API";


class Saved extends Component  {
    state = {
        savedBooks: []
    };

    componentDidMount(){
        API.getBooks()
        .then (res=> this.setState({ savedBooks: res.data}))
        .catch (err => console.log(err))
    }

    deleteButton = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }
    render () {
        return (
            <>
            <Header/>
            <Book booksave = {this.state.savedBooks}
            deleteButton = {this.deleteButton}
            />
            </>
        )
    }
}

export default Saved;