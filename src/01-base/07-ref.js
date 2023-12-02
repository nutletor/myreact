import React, { Component } from 'react'

export default class App extends Component {
    mytext = React.createRef()

    render() {
        return (
            <div>
                <input ref={this.mytext} />
                <button onClick={
                    () => {
                        console.log("click1", this.mytext.current.value)
                    }
                }>add1</button>
            </div>
        )
    }
}
