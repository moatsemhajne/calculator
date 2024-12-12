import { Component } from "react";

export default class CCCalc extends Component{
    constructor(props){
        super(props)

        this.state = { 
            n1: 0, n2: 0, result: 0
        }
    }
    cngN1 = (e) =>{
        this.setState({n1: Number(e.target.value)})
    }
    cngN2 = (e) =>{
        this.setState({n2: Number(e.target.value)})
    }
    cngResult = () =>{
        this.setState({result: this.state.n1 + this.state.n2})
    }
    render(){
        return(
            <div>
               <input onChange={this.cngN1} /> 
               <h1>+</h1>
               <input onChange={this.cngN2} />
               <button onClick={this.cngResult}>=</button>
               {this.state.result}
            </div>
        )
    }
}