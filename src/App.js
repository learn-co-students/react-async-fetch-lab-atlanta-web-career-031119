// create your App component here
import React from 'react';

class App extends React.Component   {
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState({data}))
    }
}
export default App;