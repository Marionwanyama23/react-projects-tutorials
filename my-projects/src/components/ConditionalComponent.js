import React, {useState} from 'react'


function ConditionalComponent() {
    const [display, setDisplay] = useState(true)
    let output
  if (display) {
    output = <h1>This is a conditional component</h1>  
  }
  else {
    output = <h3>Nothing to see here</h3>
  }

  return (
    <div>{output}</div>
  )
}

export default ConditionalComponent