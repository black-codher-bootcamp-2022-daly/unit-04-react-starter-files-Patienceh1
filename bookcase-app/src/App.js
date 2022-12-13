import React, { Component, useState } from "react";
import Book from "./components/Book";
import Hook from "./components/Hooks";
import data from "./models/books.json";
import BookList from "./components/BookList";
import Search from "./components/Search";



function App() {
  //const books = data;

  const backgroundPink = true;


  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  function addBook(id) {
    console.log(`The book was clicked:` + id);
  }


  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
    <div>
   <div style={{
      backgroundColour: backgroundPink ? 'purple' : 'orange',
    }}
     />
     
      <Search keyword={keyword} setKeyword={setKeyword} findBooks={findBooks} />
      <ul>
        
        <BookList className="bookcase-Container">
          {books.map((book) => (
            <Book
              addBook={addBook}
              handleClick={addBook}
              id={book.id}
              item={book}
              key={book.id}
            />
          ))}
          <Hook />
        </BookList>
      </ul>
    </div>
  
  );
}

export default App;

