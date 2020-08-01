import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Diwang', age: '26' },
      { id: '2', name: 'Onta', age: '100' },
      { id: '3', name: 'Tuyul', age: '1000' }
    ],
    showName: true
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const copyPerson = {
      ...this.state.persons[personIndex]
    }
    copyPerson.name = event.target.value

    const localPersons = [...this.state.persons]
    localPersons[personIndex] = copyPerson

    this.setState(
      {
        persons: localPersons
      }
    )
  }

  toggleShowName = () => {
    const isShown = this.state.showName
    this.setState({ showName: !isShown })
  }

  deletePersonHandler = (personIndex) => {
    // const localPersons = this.state.persons
    const localPersons = [...this.state.persons]

    localPersons.splice(personIndex, 1)
    this.setState({ persons: localPersons })
  }

  render() {
    const styleButton = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null

    if (this.state.showName) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                >
                </Person>
              )
            })
          }
        </div>
      )

      styleButton.backgroundColor = 'red'
      styleButton[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      }
    }

    let classesStyle = []

    if (this.state.persons.length <= 2) {
      classesStyle.push('red')
    }
    if (this.state.persons.length <= 1) {
      classesStyle.push('bold')
    }

    return (

      <div className="App">
        <h1>
          Hi I'm a react app!
        </h1>
        <p className={classesStyle.join(' ')}>
          This is really working!
        </p>
        <button
          style={styleButton}
          onClick={this.toggleShowName}>
          Switch names!!!!
        </button>
        {persons}
      </div>

    )
  }
}

export default App;
