import React, { Component } from 'react'
import classes from './Person.module.css'
import newWithClass from '../../../hoc/NewWithClass'
import Aux from '../../../hoc/Aux'

class Person extends Component {
    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I'm a person, my name is {this.props.name} and I'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}></input>
            </Aux>

        )
    }
}

export default newWithClass(Person, classes.Person);