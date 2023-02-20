import React from 'react'




const reducer = (state, action) => {
    switch(action.type){
        case 'DATA':
            return{
                ...state,
                data: action.payload
            }
        case 'INCR':
            return{
                ...state,
                incr: !state.incr
            }
        default:
            return state
    }

}

export default reducer