import React from 'react';

const Book = (props) => {
  console.log(props)
  return (
    <ul>
      <h2>{props.item.volumeInfo.title}</h2>;
      <h3>{props.item.volumeInfo.authors}</h3>
    </ul>
  )
}

export default Book;
