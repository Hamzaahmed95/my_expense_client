import React, { useState } from 'react';
import { months_constants2,getfunction,filterData } from '../../utils/constants'


export const Search = () => {

    const [list, setList] = useState(months_constants2);


    function getName(){
        return "Hello Hamza"
    }

    

    function handleChange(e) {
        setList(filterData(months_constants2,e.target.value))
    }

 
    return (
        <div>
            
            <h1>{getName()}</h1>
            {/* {months_constants.map(month => (<MenuItem value={month}>{month}</MenuItem>))} */}
            {list.map(month => (<p>{month.month}</p>))}
            <input className="form-control mr-sm-2" onChange={(e) => handleChange(e)} type="search" placeholder="Search" aria-label="Search" />
        </div>
    );
}
