import { createContext  } from "react";
import { useReducer } from 'react'
import reducer from "./reducer";



export const items = createContext()

const initialState = {
    data: [],
    incr: true
}


const Wrapper = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState)

    value.setData = (data) => {
        dispatch({type: 'DATA', payload: data})
    }
    value.setIncr = () => {
        dispatch({type:'INCR'})
    }
    value.handleSubmit = (name, amount, protein, storage) => {
        const bodyData = { name, amount, protein, storage }
       
        fetch('http://localhost:3001/item', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData),
        })
      }


    return( 
    <items.Provider value={value}>
        {children}
    </items.Provider>
    )
}

export default Wrapper