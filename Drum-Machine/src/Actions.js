export const turnOn = () => {
   return  {type: 'ON'}
}

export const turnOff = () => {
    return  {type: 'OFF'}
 }

 export const changeVolume = value  => {
   return {type: "CHANGE_VOLUME" , value}
 }

export const setDisplay = text => {
   return {type: "SET_DISPLAY", text}
}

 export * as actions from './Actions'