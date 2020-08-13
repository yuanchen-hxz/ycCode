import React from 'react';

import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={a:1}
    this.handleclick=this.handleclick.bind(this)
  }
 
  handleclick(){
    this.setState(state => ({
            a: state.a+1
          }));
    // this.setState((state,prop)=>{
  
    //   return {a:state.a+1}
    // })
  }
  render(){
    return(
      <div onClick={this.handleclick}>{this.state.a}</div>
    )
  }
}

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // 为了在回调中使用 `this`，这个绑定是必不可少的
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }


