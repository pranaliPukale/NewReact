import React ,{ Component } from "react";

class StateInComp extends Component{
    constructor(props){
        super(props)
        this.user="akshay"
        this.state={
            userName:'Guest'
        }
    }
    render()
    {
        return(
            <>
            <h1>State in Class Component</h1>
            <h1>user name:{this.state.userName}</h1>
            </>
        )
    }

}
export default StateInComp