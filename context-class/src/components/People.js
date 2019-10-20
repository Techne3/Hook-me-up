import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import peopleContext from '../context/peopleContext'

const People = () => {
    const context = useContext(peopleContext)
    return ( 
        <div className="col">
            <h2>People: </h2>
            <hr />
            {context.people.map(p=> (
              <div key={Math.random()*10000}>
                <p>{p.firstName} {p.lastName}</p>
              </div>
            ))}
        </div>
     );
}
 
export default People;