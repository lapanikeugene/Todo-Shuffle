import { Windows } from "./types";
import { windowsState,windowsAction } from "./windowsTypes"

const initialState:windowsState =
{
    isSuggestionOpened:false,
    isSettingsOpened:false,
    isPlaylistOpened:false,
    isVisibleTodo:true,
    isHelpOpened:false
}


export const WindowsReducer =(state:windowsState = initialState, action:windowsAction):windowsState=>{
    let c:boolean= false;
    const switchShowHidden = (setting:boolean) =>
    {
        let c:boolean = false
        if(setting===false)
         c = true;
        return  c 

    }
    switch(action.type)
    {
       

        case Windows.SETTINGS_WINDOW:
            console.log("show settings window")
            c = switchShowHidden(state.isSettingsOpened)
            console.log(state.isPlaylistOpened,c)
            return {...state,isSettingsOpened:c,isPlaylistOpened:false,isSuggestionOpened:false,isHelpOpened:false}
        case Windows.PLAYLIST_WINDOW:
            c = switchShowHidden(state.isPlaylistOpened)
            return {...state,isSettingsOpened:false,isPlaylistOpened:c,isSuggestionOpened:false,isHelpOpened:false}
        case Windows.SUGGESTION_WINDOW:
            c = switchShowHidden(state.isSuggestionOpened)
            return {...state,isSettingsOpened:false,isPlaylistOpened:false,isSuggestionOpened:c,isHelpOpened:false}
        case Windows.HELP_WINDOW:
            return {...state,isSettingsOpened:false,isPlaylistOpened:false,isSuggestionOpened:false,isHelpOpened:!state.isHelpOpened};
          
            default:
            return state;

       
    }
}