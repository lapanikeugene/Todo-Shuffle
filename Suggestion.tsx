import { useTypeSelector } from "./redux/hooks/useTypeSelector";
import { windowsState } from "./redux/windowsTypes";
import EmailForm from './components/MailForm';


function Suggestion(){
    const wState:windowsState = useTypeSelector(state=> state.windowsReducer);

    return(
      
        <div  id="settings-window" className={wState.isSuggestionOpened?"shown":"hidden"}>
              <h3>Have Idea?</h3>
              <p>You can share it with me!</p><p> This app don't collect any contact information. So if you would like to get my response,
                please leave contact data in textarea below. 
              </p>
              <p> or you can write me on <a href="https://www.linkedin.com/in/eugene-lapanik-221713234/" target="_blank" rel="noopener noreferrer">linkedin</a></p>
             {EmailForm()}
        </div>
    )
}


export default Suggestion