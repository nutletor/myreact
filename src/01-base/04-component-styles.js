import React, { Component } from 'react'

import './css/01-index.css' // 导入css webpack支持

export default class App extends Component {
  render() {
    var myname = "huang"
    var mystyle = {
        backgroundColor: "yellow",
        fontSize: "30px"
    }
    return (
        <div>
            {10+20}-{myname}

            {1>2?"aaa":"bbb"}

            <div style={mystyle}>111</div>
            <div style={{backgroundColor: "red"}}>222</div>

            <div className="active">333</div>
            <div id="myapp">444</div>
            
            <label htmlFor="username">username:</label>
            <input type="text" id="username"/>
        </div>
    )
  }
}
