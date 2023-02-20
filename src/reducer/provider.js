import { createContext  } from "react";


export const items = createContext()

const Wrapper = ({children}) => {

    const state = {
        color: 'white'
    }

    return( 
    <items.Provider value={state}>
        {children}
    </items.Provider>
    )
}

export default Wrapper