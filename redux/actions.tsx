import {Types} from "./types"

export function add_to_todo_list(_amount:number){
   
    return{
        type:Types.ADD_TO_TODO_LIST,
       
        amount:_amount
    }
   
}

export function start_todo()
{
    console.log("i will start timer")
    return{
        type:Types.START_TODO
    }
}

export function deleteTodo(index:number)
{
    console.log("i will delete one of the todos")
    return{
        type:Types.DELETE_TODO,
        index:index
    }
}

export function updateSettings(min:number,mid:number,max:number)
{
    console.log("I'm changing settings")
    return{
        type:Types.UPDATE_SETTINGS,
        min:min,
        mid:mid,
        max:max
    }
}

export function updateCurrentTodo(s:string)
{
    return {
        type:Types.UPDATE_CURRENT_TODO,
        currentTodo:s
    }
}

export function changeCurrentDuration(index:number,duration:number)
{
    return{
        type: Types.CHANGE_CURRENT_DURATION,
        index:index,
        amount:duration
    }
}

export function randTodos()
{
    return{
        type:Types.RANDOM_TODO
    }
}

export function updateTable()
{
    return{
        type:Types.UPDATE_TABLE
    }
}

export function updatesMinutes(){
    return{
        type:Types.UPDATE_MINUTES
    }
}

// uses for start and pause timer. 
export function startTimer(){
    return{
        type:Types.START_TIMER
    }
}

export function nextTodo(){
    return{
        type: Types.NEXT_TODO
    }
}
export function finishTodo(){
    return{
        type:Types.FINISH_TODOLIST
    }}
    
export function resetTimer(){
    return{
        type:Types.RESET_TIMER
    }}

export function updateTimer(){
    return {
        type:Types.UPDATE_TIMER
    }}
