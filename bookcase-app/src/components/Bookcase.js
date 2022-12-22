import React from "react";
import Book from "./Book";

export default function Bookcase ({books}) {

    return (

        <div>
        Cart
        <h1>{books.length}</h1>
      {books.map((props)=> <Book book={props.Book}/>)}
        </div>
    )
}