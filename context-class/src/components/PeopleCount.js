import React, {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import peopleContext from '../context/peopleContext'

const PeopleCount = ({peopleCount}) => {
    const context = useContext(peopleContext)
    return ( 
        <h2 className="text-center mt-4">{context.people.length}</h2>
     );
}
 
export default PeopleCount;