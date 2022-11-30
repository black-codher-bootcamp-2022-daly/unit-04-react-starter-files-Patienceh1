import React from 'react';

const Book = (props) => {
  console.log(props)

  
return (
    <ul>
      <h2>{props.item.volumeInfo.title}</h2>
      <h3>{props.item.volumeInfo.authors}</h3>
      <p>{props.item.volumeInfo.description}</p>
      <h2>{props.item.volumeInfo.retailPrice}</h2>
      <img>{props.item.volumeInfo.smallThumbnail}</img>
    </ul>
    
  ) 
}


export default Book;

