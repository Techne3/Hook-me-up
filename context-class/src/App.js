import React,{useState, useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Form from './components/Form';
import People from './components/People';
import NewestPerson from './components/NewestPerson';

import peopleContext from './context/peopleContext'
import peopleReducer from './context/peopleReducer'
import {ADD_PERSON} from './context/types'

function App() {
  // const [people, setPeople] = useState(

  const initialState = {people: [
 { firstName: 'John',
    lastName:'Doe',
 },

  ]}

  const [state, dispatch] =useReducer(peopleReducer, initialState)
 


// new function to pass people to form 
  const addPerson= (person) => {
    // setPeople([...people, person])
    dispatch({
      type: ADD_PERSON,
      payload: person
    })
  }

  return (
<peopleContext.Provider value={{
      people: state.people,
      addPerson
    }}>
    <div className="container mt-4">
        <div className="row">
          <Form /> 
          <People />
          <NewestPerson/>
        </div>
     </div>
</peopleContext.Provider>

  );
}

export default App;
