import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "./Actions"

function Control(){
    const power = useSelector(state => state.power)
    const controlVolume = useSelector(state => state.volume)
    const display = useSelector(state => state.display)
    const dispatch = useDispatch();

   
    
    

    function Regulate(){
      if(power === true){
        dispatch(actions.turnOff())
      }
      else{
        dispatch(actions.turnOn())
      }  
    }

    function changeThisVolume(){
      const value  = document.getElementById("volume").value;
      dispatch(actions.changeVolume(value))
      
    }
    

    return(
        <>  
            <div class='controls'>
                <button class={power ? "btn btn-success" : "btn btn-danger"} onClick={Regulate}> {power ? "On" : "Off"} </button>
                <label for='volume' >Volume <span class='edge'>{controlVolume}</span></label>
                <input type='range' id='volume' min="0" max='100' value={controlVolume} onChange = {changeThisVolume}></input>
                <div id='display'>{power ? display : ''}</div>
            </div>
        </>
    )
}

export default Control