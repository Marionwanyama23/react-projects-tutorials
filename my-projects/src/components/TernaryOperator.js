import React, {useState} from 'react'

function TernaryOperator() {
    const [display, setDisplay] = useState(false)
  return display ? (
    <div>
        <h2>This statement appears when the state is set to true</h2>
    </div>
  ): (
    <div>
        <h2>This statement appears when the state is set to false</h2>
    </div>
  )
}

export default TernaryOperator