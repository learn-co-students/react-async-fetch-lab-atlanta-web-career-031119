// create your App component here
import React, { Component } from 'react'
// import './App.css'

export default class App extends Component {

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
    }

    render() {
        return (
        <div className="App">

        </div>
        )
    }
}