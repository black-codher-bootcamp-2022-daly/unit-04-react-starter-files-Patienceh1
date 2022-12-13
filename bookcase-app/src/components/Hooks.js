import React from 'react';
import { useState } from 'react';




export default function Hook() {
    const [count, setCount] = useState(0);

    function addOne () {
      setCount(count + 1)
      
    }

    return <div className='Hook'>
       <button  style={buttonWithStyle} onClick={addOne}>Add +{count}</button>
    </div>
}

const buttonWithStyle = {
  color: "black",
  fontSize: "20px",
  fontWeight: "bold",
  padding: "10px 15px",
  backgroundColor: "orange",


};
