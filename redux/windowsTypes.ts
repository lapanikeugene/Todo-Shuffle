import { Windows } from "./types"

export interface windowsState {
    isSettingsOpened: boolean,
    isSuggestionOpened:boolean,
    isPlaylistOpened:boolean,
    isVisibleTodo:boolean,
    isHelpOpened:boolean
}

export interface windowsAction {
    type:Windows
}