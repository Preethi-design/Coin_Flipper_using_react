import { render } from '@testing-library/react'
import { className } from 'postcss-selector-parser'
import React, {Component} from 'react'
import { canConstructReadableStream } from 'workbox-core/_private'
import Coin from './components/Coin'
import './App.css'
class App extends Component{
  state ={
    face: 0,
    count: 0,
    countHead: 0,
    countTail:0
  }
  toss=()=>{
    let countHead=this.state.countHead
    let countTail=this.state.countTail

    const face = Math.floor(Math.random()*2)
    if(face==0){
      countTail +=1
    }
    else{
      countHead +=1
    }

    this.setState({
      face,
      count: this.state.count + 1,
      countHead,
      countTail
    })
  }
  render(){
      return ( 
      <div className="wrapper">
        <Coin face={this.state.face}/>
        <div className="container">
          <button className="toss-btn" onClick={this.toss}>TOSS</button>
          <h1 className="text">Out of {this.state.count} tosses {this.state.countHead} were heads and {this.state.countTail} where Tails</h1>
        </div>
      </div>   
  );
  }
}


export default App