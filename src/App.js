// create your App component here
import React, {Component} from 'react';

class App extends Component   {
    constructor(){
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState({peopleInSpace: data.people}))
    }

    render () {
        {this.state.peopleInSpace.map(person=>
            person.name
            )}
    }
}
export default App;