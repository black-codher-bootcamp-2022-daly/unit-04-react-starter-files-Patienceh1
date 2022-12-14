import React, { Component, useState } from "react";
import Book from "./components/Book";
import Hook from "./components/Hooks";
import data from "./models/books.json";
import BookList from "./components/BookList";
import Search from "./components/Search";
import Bookcase from "./components/Bookcase";
import {
  BrowserRouter,
  Routes,
  Route,} from "react-router-dom";
  import Header from "./components/Header";





function App() {
  //const books = data;

  const backgroundPink = true;


  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);
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


  function addBookToCart (book) {
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({newBasket, basket})
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
              onClick={() => addBookToCart(book)}
              id={book.id}
              item={book}
              key={book.id}
            />
          ))}
          <Hook />
        </BookList>
        <Routes>
        <Route path="/Bookcase" element={<h1>Cart</h1>} />
        <Route path="./"element={ <> <Bookcase books={basket}/> </>} />
        <Route path="/About"element={ <h1> About</h1>} />
      </Routes>
      </ul>
    </div>
  
  );
}


export default App;

