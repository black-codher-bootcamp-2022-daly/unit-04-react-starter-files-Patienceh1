import React from 'react';
import PropTypes from "prop-types";

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


Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }),
    }),
  }),
};

export default Book;

