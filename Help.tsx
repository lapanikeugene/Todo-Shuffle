import { useTypeSelector } from "./redux/hooks/useTypeSelector";
import { windowsState } from "./redux/windowsTypes";



function Help()
{
    const wState:windowsState = useTypeSelector(state=> state.windowsReducer);

    return(
        <div id="settings-window" className={`help-window ${wState.isHelpOpened?"shown":"hidden"}`}> 
        <h3>About this app</h3>
        <em>This app I've made for practice my react-redux + typescript skills. </em>
        <p>Todo Shuffle is effective way when you don't know what to choose from list of tasks, or want to fight against procrastination</p>
        <strong>How to use?</strong>
        <p>add up to 5 todos and push start button. Aaand magic will begin.</p>
        <p>there is also predefined random todos. Simply push some buttons and you will see them</p>
        <hr />
        <p>Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=96243" target="_blank"  rel="noopener noreferrer">Pixabay</a> <br />
            Icon from <a href="https://Favicon.io/" target="_blank"  rel="noopener noreferrer">Favicon.io</a></p>
   
        </div>

)
}


export default Help;