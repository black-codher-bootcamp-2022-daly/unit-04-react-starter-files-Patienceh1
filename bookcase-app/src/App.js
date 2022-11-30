import React, { useState } from 'react';
import Book from './components/Book';
import Hook from './components/Hooks';
import data from './models/books.json';

function App() {
  //const books = data;
  const[books] = useState(data);
  return <ul>
  {books.map((book)=><Book item={book} key={book.id} />)}
  <Hook />
  
  </ul>
}

export default App;

