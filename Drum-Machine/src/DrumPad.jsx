import { useSelector } from "react-redux";
import allReducers from "./Reducers";

function Pad({id, keyTrigger, url}){

    const power = useSelector(state => state.power)
    const volume = useSelector(state => state.volume)
    const audioVolume = Number((volume / 100).toFixed(2))

    function PlaySong(){
        const audio = document.getElementById(keyTrigger)
        audio.currentTime = 0;
        audio.volume = audioVolume;
        audio.play();  

    }

    

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