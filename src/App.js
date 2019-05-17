import React from 'react';


class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then(res => res.json())
      .then(astronauts => {
        this.setState({
          peopleInSpace: astronauts.people
        })
      })}

  // componentDidMount() {
  //   fetch('http://api.open-notify.org/astros.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         peopleInSpace: data.people
  //       })
  //     })
  // }


  render() {
    return (
            <div>
              {this.state.peopleInSpace.map(person => person.name)}
            </div>
          )
        }

}

/* Write a componentDidMount method. Inside the method, send a fetch request to http://api.open-notify.org/astros.json, a free API that returns a list of people currently in space.
*/



// class App extends Component {




export default App
