import React, { useState } from "react";
import Book from "./components/Book";
import Hook from "./components/Hooks";
import data from "./models/books.json";
import BookList from "./components/BookList";
import Search from "./components/Search";
import Bookcase from "./components/Bookcase";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  //const books = data;

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

  function addBookToCart(book) {
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }

  return (
    <div>
      <Header styles={{}} />
      <Routes>
        <Route
          index
          path="/Home"
          element={
            <BookList className="bookcase-Container">
              <Search
                keyword={keyword}
                setKeyword={setKeyword}
                findBooks={findBooks}
              />
              {books.map((book) => (
                <Book
                  handleClick={addBook}
                  onClick={() => addBookToCart(book)}
                  id={book.id}
                  book={book}
                  key={book.id}
                />
              ))}
              <Hook />
            </BookList>
          }
        />
        <Route
          path="/Bookcase"
          element={<Bookcase books={basket} key={books.id} />}
        />
        <Route path="/About" element={<h1> About</h1>} />
      </Routes>

      <ul></ul>
    </div>
  );
}

export default App;
