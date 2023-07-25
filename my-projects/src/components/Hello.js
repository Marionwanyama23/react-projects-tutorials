/*
function Hello() {
    return <h1>Hello World!</h1>
}
*/
//FUNCTION COMPONENT
const name = "Marion Wanyama"
let Hello = () => {
return <h1>The message is: {displayMessage()}</h1>
}

const displayMessage = () =>{
    return 'I need help!'
}

export default Hello;