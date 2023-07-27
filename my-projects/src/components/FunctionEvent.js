import React from 'react'

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