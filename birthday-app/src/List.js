import React, {useState} from 'react'
import { data } from './data'

//
const List = () => {
    const [people, setPeople]  = useState(data);


    const clearList = () => {
        setPeople([]);
        people.length = 0;
    };

    return <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
            return <Person key={person.id} {...person}></Person> 
        })}
        <button type='button' className='cls' onClick={() => clearList()}> Clear List</button>
    </section>
};

const Person = (props) => {
    const {name, age, img} = props;
    
    return <article className='person'>
        <img src={img} alt='person' />
        <div><h4>{name}</h4>
        <p>{age} years</p></div>
    </article>
};

export default List;