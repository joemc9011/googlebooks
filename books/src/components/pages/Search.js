import Book from "../Book";
import Booksearch from "../Booksearch";
import Header from "../Header";
function Search () {
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
}

export default Search;