import React, { Component } from "react";

class Subnav extends Component {
    render() {
        return <div>subnav</div>
    }
}

class Navbar extends Component {
    render() {
        return <div>navbar
            <Subnav></Subnav>
        </div>
    }
}

function Swiper() {
    return <div>swiper</div>
}

const Tabbar = () => <div>tabbar</div>

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <div>1111</div>
                </Navbar>

                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}