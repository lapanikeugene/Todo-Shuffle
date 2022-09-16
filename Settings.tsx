import { useEffect, useState } from "react";
import { userState } from "./redux/fortypes";
import { useTypeSelector } from "./redux/hooks/useTypeSelector";
import "./Settings.css";
import { updateSettings } from "./redux/actions";
import { useDispatch } from "react-redux";
import { windowsState } from "./redux/windowsTypes";
import { showWindow } from "./redux/actionsUI";
import { Windows } from "./redux/types";

function Settings()
{
    const state:userState = useTypeSelector(state=> state.reducer);
    const wState:windowsState = useTypeSelector(state=> state.windowsReducer);
    
    const [valueEasy,setEasy] = useState(state.easy)
    const [valueMid,setMid] = useState(state.medium)
    const [valueMax,setMax] = useState(state.hard)
    const dispatcher = useDispatch();
    const EasyF =  (a:string)=>{
    useEffect(()=>{
setEasy(parseInt(a))
    },[a])
    }
    return(
        <div id="settings-window" className={wState.isSettingsOpened?"shown":"hidden"}> 
            <strong>Here you can set duration for every button from min to max</strong>
            <p><em>There is no cookies, so you have to change these params every time you update browser page</em></p>
            <span><input type="number" id="min-settings" min={1} max={5} value={valueEasy} 
                        onChange={(e)=>{setEasy(parseInt(e.target.value))}}></input>
                <label htmlFor ="min-settings"> Min</label></span>
            <span><input type="number" id="mid-settings"  min={6} max={25} value={valueMid}
                        onChange={(e)=>{setMid(parseInt(e.target.value))}}>
                </input><label htmlFor ="mid-settings"> Mid</label></span>
            <span><input type="number" id="max-settings"  min={26} max={60} value={valueMax}
                        onChange={(e)=>{setMax(parseInt(e.target.value))}}></input>
                <label htmlFor ="max-settings"> Max</label></span>
            <div><button className="button-submit" onClick={()=>{dispatcher(showWindow(Windows.SETTINGS_WINDOW)); dispatcher(updateSettings(valueEasy,valueMid,valueMax))}}>Done!</button></div>
        </div>
    )
}





export default Settings