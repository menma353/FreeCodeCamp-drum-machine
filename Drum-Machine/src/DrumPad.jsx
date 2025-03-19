import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "./Actions";
import allReducers from "./Reducers";

function Pad({keyCode, id, keyTrigger, url}){

    const power = useSelector(state => state.power)
    const volume = useSelector(state => state.volume)
    const dispatch = useDispatch()
    const audioVolume = Number((volume / 100).toFixed(2))

    function PlaySong(){
        const audio = document.getElementById(keyTrigger)
        audio.currentTime = 0;
        audio.volume = audioVolume;
        audio.play();  
        dispatch(setDisplay(id))
    }

    document.addEventListener('keydown', event => {
        if (event.keyCode === keyCode){
            document.getElementById(id).style.backgroundColor = "#890909";
            document.getElementById(id).style.boxShadow = "5px 5px #140404";
            setTimeout(() => {
                document.getElementById(id).removeAttribute("style");
            }, 100)
            
            PlaySong()
        }
    })
    

    return(
        <>
            {power ? 
                <div class='drum-pad' onClick={PlaySong} id={id}>
                    <audio id={keyTrigger} src={url} class='clip' key={keyCode}></audio>    
                    {keyTrigger}
                </div>
                    :
                    <div class='drum-pad disable' onClick={PlaySong} id={id}>{keyTrigger}</div>
            }
        </>
    )
}

export default Pad