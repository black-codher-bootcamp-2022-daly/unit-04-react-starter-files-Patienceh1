import React, { useState } from "react";
import Book from "./components/Book";
import Hook from "./components/Hooks";
import data from "./models/books.json";
import BookList from "./components/BookList";

function App() {
  //const books = data;
  const [books] = useState(data);
  function addBook(id) {
    console.log(`The book was clicked:` + id);
  }
  return (
    <ul>
      <BookList className="bookcase-Container" >
        {books.map((book) => (
          <Book
          addBook={addBook}
          handleClick={addBook} id={book.id}
            item={book}
            key={book.id}
           
          />
        ))}
        <Hook />
      </BookList>
    </ul>
  );
}

export default App;
