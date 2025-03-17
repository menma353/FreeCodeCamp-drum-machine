import { useState } from "react"

function Control(){
    const [power, setPower] = useState(true)

    return(
        <>  
            <div class='controls'>
                <button class={power ? "btn btn-success" : "btn btn-danger"}> {power ? "On" : "Off"} </button>
                <label for='volume' >Volume <span class='edge'>Vol Num</span></label>
                <input type='range' id='volume '></input>
                <div id='display'>l</div>
            </div>
        </>
    )
}

export default Control