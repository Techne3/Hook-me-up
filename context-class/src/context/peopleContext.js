import React,{createContext} from 'react'


const peopleContext= createContext({
    people: [],
    addPerson: (person) => {}
})

export default peopleContext