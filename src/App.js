import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {id:'1',name:'max',age:28},
      {id:'2',name:'tushar',age:21},
      {id:'3',name:'mayank',age:24}
    ],
    otherState:'some other value',
    showPersons:false
  };

  nameChangedHandler=(event,id) => {

    const personIndex= this.state.persons.findIndex(p=>{
      return p.id===id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons:!doesShow
      })
  }

  deleteNameHandler = (personIndex) => {
      // const persons = this.state.persons.slice(); //first way of getting a new array and not overridding the OG array
      const persons = [...this.state.persons]; // the more modern way of getting a new array and not overridding the OG array
      persons.splice(personIndex,1);
      this.setState({persons:persons})
  }


  render() {

    let persons = null;
    let btnClass='';

    if (this.state.showPersons) {
      persons = (    
          <div>
              {this.state.persons.map( (person,index)=> {
                return <Person 
                click={this.deleteNameHandler.bind(this,index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event)=>this.nameChangedHandler(event,person.id)} />
              })
              }
          </div>
        );
        btnClass=classes.Red;
}

    const assignedClasses = [];
    if(this.state.persons.length<=2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1) {
      assignedClasses.push(classes.bold);
    }
 
    return (
      <div className={classes.App}>
        <h1>hi i'm a react App</h1>
        <p className={assignedClasses.join(' ')} >wow this is really working !</p>
        <button
         className={btnClass}
        onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
