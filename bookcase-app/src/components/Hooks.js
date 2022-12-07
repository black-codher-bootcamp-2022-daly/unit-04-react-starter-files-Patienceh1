import React from 'react';
import { useState } from 'react';




export default function Hook() {
    const [count, setCount] = useState(0);

    function addOne () {
      setCount(count + 1)
      
    }

    return <div className='Hook'>
       <button onClick={addOne}>Add +{count}</button>
    </div>
}

