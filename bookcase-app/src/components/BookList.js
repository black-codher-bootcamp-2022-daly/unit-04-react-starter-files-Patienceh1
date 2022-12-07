import React from "react";


export default function BookList(props) {
  return (
    
    <div className="BookList-Container"
    
    style={{
      backgroundColor: "beige"
       }}>
        
      {props.children} 
      
    </div>
  );
  
}
