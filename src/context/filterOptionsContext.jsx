import { createContext } from "react";

const filterActiveOptionsContext = createContext({
    filterActiveOptions: {
        generation: [],
        type: [],
        evolution: []
    },
    setFilterActiveOptions: () => {}
})

export default filterActiveOptionsContext;