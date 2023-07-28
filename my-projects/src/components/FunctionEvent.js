import React from 'react'
//in function event handling a function is used 
function FunctionEvent() {
    const handleClick = () => {
        console.log('This button has been clicked ')
    }
  return (
    <div>
        Functional Component
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default FunctionEvent