import React from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";

const MyBooks = ({books, handleUpdateShelf, onNavigate}) => {
      const currentlyReading = books.filter(book => book.shelf && book.shelf === "currentlyReading");
      const wantToRead       = books.filter(book => book.shelf && book.shelf === "wantToRead");
      const read             = books.filter(book => book.shelf && book.shelf === "read");

      //const booksFiltered = props.books.filter(book => book.shelf === props.shelf);
      
        return(
        <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {currentlyReading.map((book) => currentlyReading && (
                     <li key={book.id}>
                     <BookList
                     book={book}  
                    handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)} />
                     </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantToRead.map((book) => wantToRead && (
                     <li key={book.id}>
                     <BookList
                     book={book}  
                      handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)} />
                     </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {read.map((book) =>  read && (
                     <li key={book.id}>
                     <BookList
                     book={book}  
                    handleUpdateShelf={(event) => handleUpdateShelf(book, event.target.value)} />
                     </li>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
             <div className="open-search">
              <Link to='/search' onClick={() => onNavigate}>Add a book</Link>
            </div>
          </div>
          
        </div>
      )
}
export default MyBooks;