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

const volumeReducer = (state=30, action) => {
    switch(action.type){
        case 'CHANGE_VOLUME':
            return action.value
        default:
            return state
    }
}

const allReducers = combineReducers({
    power : powerReducer,
    volume : volumeReducer
})

export default allReducers