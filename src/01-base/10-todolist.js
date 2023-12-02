import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef()

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
                <input ref={this.myref} />
                <button onClick={ this.handleClick }>add1</button>
                <ul>
                    {
                        this.state.list.map(item =>
                            <li key={item.id}>{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }

    handleClick = () => {
        console.log("click", this.myref.current.value)

        // 不要直接修改状态，可能会造成无法预期的问题
        // this.state.list.push(this.myref.current.value)

        let newList = [...this.state.list]
        newList.push({
            id: Math.random()*1000,
            text: this.myref.current.value
        })

        this.setState({
            list: newList
        })
    }
}
