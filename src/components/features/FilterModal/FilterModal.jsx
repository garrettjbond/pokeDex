import React, { useState } from 'react';
import FilterModalOptionSet from '../FilterModalOptionSet/FilterModalOptionSet';
import '../FilterModal/FilterModal.css'

function FilterModal(props) {
    const options = {
        generation: [1, 2, 3, 4, 5],
        type: ["Normal",
            "Fire",
            "Water",
            "Grass",
            "Electric",
            "Ice",
            "Fighting",
            "Poison",
            "Ground",
            "Flying",
            "Psychic",
            "Bug",
            "Rock",
            "Ghost",
            "Dragon",
            "Dark",
            "Steel",
            "Fairy"],
        evolution: [1, 2, 3]
    }


    const [filter, setFilter] = useState({
        generation: 1,
        type: [],
        evolution: null
    });


    const toggleFilter = () => {
        props.setIsFilter(prev => !prev)
    }

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <h2>Filters</h2>
                    <button>Clear all</button>
                </div>
                <hr />
                <FilterModalOptionSet title="Generation" options={options.generation} />
                <hr />
                <FilterModalOptionSet title="Evolution" options={options.evolution} />
                <hr />
                <FilterModalOptionSet title="Type" options={options.type} />
                <div className='modalFooter'>
                <button>Apply Filters</button>
                <button onClick={toggleFilter}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default FilterModal;