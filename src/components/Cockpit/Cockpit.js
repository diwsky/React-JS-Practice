import React from 'react'
import classes from './Cockpit.module.css'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

    let classesStyle = []
    let btnClass = classes.button;

    if (props.showPersons) {
        btnClass = [classes.button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        classesStyle.push(classes.red)
    }
    if (props.persons.length <= 1) {
        classesStyle.push(classes.bold)
    }

    return (
        <Aux>
            <h1>
                {props.appTitle}
            </h1>
            <p className={classesStyle.join(' ')}>
                This is really working!
            </p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Switch names!!!!
            </button>
        </Aux>
    );
};

export default cockpit;