import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click} >i'm {props.name} and i'm {props.age} years old !</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);