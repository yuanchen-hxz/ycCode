import React, { Component } from 'react';
export default class Tow extends Component{
    constructor(prop){
        super()
        this.state={
            a:1
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(state=>(
            {a:state.a+1}
        ))
    }
    render(){
        return(
            <>
                <div onClick={this.handleClick}>{this.state.a}</div>
            </>
        )
    }
}