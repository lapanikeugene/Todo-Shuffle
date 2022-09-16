import { Types } from "./types"

export interface userState{
    listOftodos: [{todo:string,amount:number,initPosition:number}]|[],
    error: null|string,
    easy:number,
    medium:number,
    hard:number,
    settledTime:number,
    isStarted:boolean,
    currentTodo:string,
    currentTodoNumber:number,
    isShuffled:boolean,
    isTableUpdate:boolean,
    isTimerStarted:boolean,
    isTimerUpdated:boolean
    
   

}

export interface userAction{
    type:Types,
   
    index:any,
    amount:number,
    min:number,
    mid:number,
    max:number,
    currentTodo:string
}
