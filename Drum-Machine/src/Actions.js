export const turnOn = () => {
   return  {type: 'ON'}
}

export const turnOff = () => {
    return  {type: 'OFF'}
 }

 export const changeVolume = value  => {
   return {type: "CHANGE_VOLUME" , value}
 }


 export * as actions from './Actions'