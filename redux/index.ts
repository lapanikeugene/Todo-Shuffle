import {combineReducers} from "redux"
import { Reducer } from "./reducer"
import { WindowsReducer } from "./windowsReducer"


export const rootReducer = combineReducers({reducer:Reducer,windowsReducer:WindowsReducer})

export type RootState  = ReturnType<typeof rootReducer>