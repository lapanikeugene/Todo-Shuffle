import { useTypeSelector } from "./redux/hooks/useTypeSelector";
import { windowsState } from "./redux/windowsTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faYoutube } from '@fortawesome/free-brands-svg-icons'


function PlayLists()
{
    const wState:windowsState = useTypeSelector(state=> state.windowsReducer);
    return(
        <div  id="settings-window" className={wState.isPlaylistOpened?"shown":"hidden"}>
            <strong>Music for Concetration</strong>
            <p><em>Music can help to begin your task.</em></p>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=jfKfPfyJRdk1" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube}  /> Lofi</a></li>
              <li><a href="https://www.youtube.com/watch?v=9uKjr5RNoXc" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube}  /> Lofi Rock</a></li> 
              <li><a href="https://www.youtube.com/watch?v=IjMESxJdWkg" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /> Lofi Hip-Hop</a></li> 
               
            </ul>
        </div>
    )
}


export default PlayLists