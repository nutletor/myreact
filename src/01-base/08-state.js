import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name: 'collect',
        isCollected: false 
    }

    render() {
        return (
            <div>
                <h1>欢迎来到react开发</h1>
                <button onClick={
                    () => {
                        if (this.state.isCollected) {
                            console.log("collect cancel")
                        } else {
                            console.log("collect")
                        }

                        this.setState({
                            isCollected:!this.state.isCollected
                        })
                    }
                }>{this.state.isCollected?"取消收藏":"收藏"}</button>
            </div>
        )
    }
}
