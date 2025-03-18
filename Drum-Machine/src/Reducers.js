import { combineReducers } from 'redux'

const powerReducer = (state=true, action) => {
    switch(action.type){
        case 'ON':
            return true
        case 'OFF':
            return false
        default:
            return state
    }
}

const allReducers = combineReducers({
    power : powerReducer
})

export default allReducers