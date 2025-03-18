import { useSelector } from "react-redux";
import allReducers from "./Reducers";

function Pad({id, keyTrigger, url}){

    function PlaySong(){
        const audio = document.getElementById(keyTrigger)
        console.log(audio)
        audio.currentTime = 0;
        audio.volume = 0.25;
        audio.play();  

    }

    const power = useSelector(state => state.power)

    return(
        <>
            {power ? 
                <div class='drum-pad' onClick={PlaySong} id={id}>
                    <audio id={keyTrigger} src={url}></audio>    
                    {keyTrigger}
                </div>
                    :
                    <div class='drum-pad disable' onClick={PlaySong} id={id}>{keyTrigger}</div>
            }
        </>
    )
}

export default Pad