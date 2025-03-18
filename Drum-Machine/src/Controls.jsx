import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "./Actions"

function Control(){
    const power = useSelector(state => state.power)
    const dispatch = useDispatch();
    
    function Regulate(){
      if(power === true){
        dispatch(actions.turnOff())
      }
      else{
        dispatch(actions.turnOn())
      }  
    }
    

    return(
        <>  
            <div class='controls'>
                <button class={power ? "btn btn-success" : "btn btn-danger"} onClick={Regulate}> {power ? "On" : "Off"} </button>
                <label for='volume' >Volume <span class='edge'>Vol Num</span></label>
                <input type='range' id='volume '></input>
                <div id='display'></div>
            </div>
        </>
    )
}

export default Control