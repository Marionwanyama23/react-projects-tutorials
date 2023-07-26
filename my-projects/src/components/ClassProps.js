import { Component } from "react";

//this keyword is used to accept props
class ClassProp extends Component {
    render (){
        return <h3>Message: {this.props.message}</h3>
    }
}

export default ClassProp;