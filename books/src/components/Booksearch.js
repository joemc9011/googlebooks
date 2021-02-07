function Booksearch(props) {
    return (
        <div>
             <h5>Book Search</h5>
        <input 
        type="text"
        placeholder="Please type book here"
        value={props.search}
        onChange={props.handleInputChange}
        name="books"
        className="booksearch"
        id="booksearchid"
        />
        <button classname = "searchbutton" type="Submit" onClick={props.handleFormSubmit}> Search</button>
        </div>
       

        );
}

export default Booksearch;