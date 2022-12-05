import React, { useState } from "react";
import Book from "./components/Book";
import Hook from "./components/Hooks";
import data from "./models/books.json";
import BookList from "./components/BookList";

function App() {
  //const books = data;
  const [books] = useState(data);
  function addBook(title) {
    console.log(`The book ${title} was clicked`);
  }
  return (
    <ul>
      <BookList className="bookcase-Container" addBook={addBook}>
        {books.map((book) => (
          <Book  item={book} key={book.id} onClick={()=> book.addBook(book.id)} />
        ))}
        <Hook />
      </BookList>
    </ul>
  );
}

export default App;
