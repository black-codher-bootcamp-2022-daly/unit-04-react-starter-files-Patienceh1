import React, { useState } from 'react';
import Book from './components/Book';
import Hook from './components/Hooks';
import data from './models/books.json';

function App() {
  //const books = data;
  const[books] = useState(data);
  return <ul>
  <BookList>
  {books.map((book)=><Book item={book} key={book.id} />)}
  <Hook />
  </BookList>
  </ul>
}


function BookList (props) {
return(
    <div style={{
      backgroundColor: "pink"
    }}>
      <h1>Patience's Book Case</h1>
      <div className="BookList-Container">{props.children}</div>
    </div>
  )
}

export default App;

