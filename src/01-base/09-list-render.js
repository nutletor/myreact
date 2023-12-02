import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [
            { id: 1, text: "xxx" },
            { id: 2, text: "yyy" },
            { id: 3, text: "zzz" },
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item =>
                            <li key={item.id}>{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }
}
