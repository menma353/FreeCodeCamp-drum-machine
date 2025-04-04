import { useState } from 'react'
import Pad from "./DrumPad"
import Control from './Controls';



const drumPads = [
  { id: "Heater-1", keyTrigger: "Q", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", keyCode: 81 },
  { id: "Heater-2", keyTrigger: "W", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", keyCode: 87 },
  { id: "Heater-3", keyTrigger: "E", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", keyCode: 69 },
  { id: "Heater-4", keyTrigger: "A", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", keyCode: 65 },
  { id: "Clap", keyTrigger: "S", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", keyCode: 83 },
  { id: "Open-HH", keyTrigger: "D", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", keyCode: 68 },
  { id: "Kick-n'-Hat", keyTrigger: "Z", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", keyCode: 90},
  { id: "Kick", keyTrigger: "X", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", keyCode: 88 },
  { id: "Closed-HH", keyTrigger: "C", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", keyCode: 67 },
];

function App() {
    

  return (
    <>
      <div id='drum-machine'>
        <div class="row">
          <div class="col-8">
                {drumPads.map(pad=> (<Pad keyCode={pad.keyCode} id={pad.id} keyTrigger={pad.keyTrigger} url={pad.url} />))}
          </div>
          <div class="col-4">
            <Control/>
          </div>
        </div>
      </div>
    
    </>
  )
    
}

export default App
