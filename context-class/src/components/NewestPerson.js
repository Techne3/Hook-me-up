import React,{useState, useEffect, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PeopleCount from './PeopleCount'
import peopleContext from '../context/peopleContext'

const NewestPerson = () => {
    const context = useContext(peopleContext)
    const newestPerson = context.people[context.people.length -1]

    useEffect(()=> {    
        const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`
        document.title = newestPersonName;
        console.log('useEffect')
        // return () => {
        //     console.log('unmounted')
        // }

    },[newestPerson])

    return (
        <div className="col col-sm-12">
            <h2 className="mt-4 text-center">
                NewestPerson: {`${newestPerson.firstName} ${newestPerson.lastName}`}
            </h2>
            <PeopleCount />
        </div>


      );
}
 
export default NewestPerson;
