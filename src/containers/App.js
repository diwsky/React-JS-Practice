import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import newWithClass from '../hoc/NewWithClass';
import Aux from '../hoc/Aux';
class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Diwang', age: '26' },
      { id: '2', name: 'Onta', age: '100' },
      { id: '3', name: 'Tuyul', age: '1000' }
    ],
    showName: false
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
    // local render Variables
    let persons = null

    if (this.state.showName) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      )
    }

    return (

      <Aux>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showName}
          persons={this.state.persons}
          clicked={this.toggleShowName}
        />
        { persons}
      </Aux>
    )
  }
}

export default newWithClass(App, classes.App);
