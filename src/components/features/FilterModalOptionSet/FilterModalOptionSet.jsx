import React, { useState, useContext } from 'react';
import filterActiveOptionsContext from '../../../context/filterOptionsContext';

import '../FilterModalOptionSet/FilterModalOptionSet.css'

function FilterModalOptionSet(props) {
    const {filterActiveOptions, setFilterActiveOptions} = useContext(filterActiveOptionsContext)
    const filterArray = [...props.options]

    const addFilter = (e) => {
        console.log(e.target.innerText)
        setFilterActiveOptions((prev) => {
            type: e.target.innerText
        })
        console.log(filterActiveOptions)

    }

    return (
        <div>
            <h3 className='filterTitle'>{props.title}</h3>
            <div className='filterOptionsWrapper'>
                {filterArray.map((item, index) => {
                    return <p key={index} onClick={addFilter}>{item}</p>;
                })}
            </div>
        </div>
    );
}

export default FilterModalOptionSet;