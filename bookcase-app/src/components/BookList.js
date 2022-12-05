import React from "react";
import Book from "./Book";

export default function BookList(props) {
  return (
    
    <div className="BookList-Container"
    
    style={{
      backgroundColor: "beige" }}>
        <h1 style={{ backgroundColor: "pink" }}>Patience's Book Case</h1>
      {props.children} 
      
    </div>
  );
  
}
