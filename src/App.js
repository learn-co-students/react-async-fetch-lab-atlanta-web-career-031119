import React from 'react'


class App extends React.Component {

    constructor() {
        super()
        this.state ={
            spacePeeps: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(astros => this.setState({
            spacePeeps: astros.people
        }))
    }

    render() {
        return(
            <div></div>
        )
    }


}

export default App