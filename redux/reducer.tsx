import {Types} from "./types"
import { userState } from "./fortypes"
import { userAction } from "./fortypes"
import { act } from "react-dom/test-utils"
const initialState:userState =
{
   listOftodos:[],
   currentTodo:"",
   currentTodoNumber:0,
   error: null,
   easy:5,
   medium:15,
   hard:45,
   settledTime:3,
   isStarted:false,
   isShuffled:false,
   isTableUpdate:false,
   isTimerStarted:false,
   isTimerUpdated:false


}

export const Reducer = (state:userState=initialState,action:userAction):userState=>{
    console.log("reducer got action",action)
   // console.log("action type comparison",Types.ADD_TO_TODO_LIST,action.type)
    const thingsToDoIfCurToDoIsEmpty:string[] = ["clean the room","write email, that you postponing for later",
                                                 "call grand-/ parents","take apart the papers","go for a walk",
                                                 "write something to a person you like", 
                                                 "make unpleasant thing done","clean your email inbox",
                                                 "free space on PC/MAC/Phone","cancel unnecessary subscriptions",
                                                 "do something related to your hobby",
                                                 "support the author🍺! ","write a short story","try origami",
                                                 "plan your vacation","let your eyes relax","get a nap",
                                                 "help somoeone"
                                                ]
    switch(action.type)
    {
        case Types.ADD_TO_TODO_LIST:
            //console.log("previous state",state.listOftodos)
            //return {...state,listOftodos:state.listOftodos.concat({[todo:action.todo[0],amount:todo[1]]}) }
            let _todo = state.currentTodo;

            //TODO:Move to utils. 
            const getRandomTodo=()=>
            {
                let _rt:string;
                while(true){
                _rt = thingsToDoIfCurToDoIsEmpty[Math.floor(Math.random()*thingsToDoIfCurToDoIsEmpty.length)]
                 if (state.listOftodos.some(x=>{ return x.todo===_rt}))
                   continue;
                   else
                   break;
                }
                return _rt;
            }
            //if string is empty, code will chose from the list of things to do thingsToDoIfCurToDoIsEmpty. 
            if(_todo==="")
                _todo = getRandomTodo() //thingsToDoIfCurToDoIsEmpty[Math.floor(Math.random()*thingsToDoIfCurToDoIsEmpty.length)]
            return Object.assign({},state,{currentTodo:"",listOftodos:[...state.listOftodos,{todo:_todo,amount:action.amount,
                initPosition:state.listOftodos.length}]})


        case Types.START_TODO:
            console.log("=====start todo======")         
            return  Object.assign({},state,{isStarted:true}); 


        case Types.DELETE_TODO:
            const updatedArray:{todo:string,amount:number}[] = state.listOftodos.slice(0,action.index)
                                .concat(state.listOftodos.slice(action.index+1,state.listOftodos.length))
                              //  console.log("updated array",updatedArray);
                        
            return Object.assign({},state,{listOftodos:updatedArray,isTableUpdate:!state.isTableUpdate})

        
        case Types.UPDATE_SETTINGS:
            //console.log("settings update",state.easy,state.medium,state.hard)
            return Object.assign({},state,{easy:action.min,medium:action.mid,hard:action.max,isTableUpdate:!state.isTableUpdate})

        
        case Types.UPDATE_CURRENT_TODO:
           //console.log("current todo",state.currentTodo)
            return  Object.assign({},state,{currentTodo:action.currentTodo,isTableUpdate:!state.isTableUpdate})

        
        case Types.CHANGE_CURRENT_DURATION:
            const arr = state.listOftodos;
            console.log("change duration",arr)
            arr[action.index].amount = action.amount;
             return  Object.assign({},state,{listOftodos:arr,isTableUpdate:!state.isTableUpdate})

             
        case Types.RANDOM_TODO:  
        // if(!state.isShuffled)
        // {   
            console.log("=== Shuffle todo list ===")
            const shuffleArray:[{todo:string,amount:number,initPosition:number}]|[] = state.listOftodos;
            let l = shuffleArray.length

            for(let i:number = l-1; i >= 0;i--)
            {
                let r:number = Math.floor(Math.random()*l);
                let temp = shuffleArray[i];
                shuffleArray[i] = shuffleArray[r];
                shuffleArray[r] = temp;
                
            }


            
            const newTime:number = shuffleArray[0]!.amount;
           

            console.log(newTime,state.settledTime)
            console.log("update todo array |reducer|108",shuffleArray);
            console.log("original array |reducer|109",state.listOftodos);
        //    const newState = {...state,settledTime:newTime,listOftodos:shuffleArray}
        //    console.log(newState.settledTime,state.settledTime)
        //  return {...state,newState as userState}
        //     //console.log("shuffled array",shuffleArray)
        //     //console.log("1",shuffleArray[0].amount)
        //     //return{...state,isStarted:true}

        Object.assign({},state,{settledTime:newTime,listOftodos:[...shuffleArray]})
        console.log("after change of array of todos|reducer|118",state.listOftodos)
                return  {...state,settledTime:newTime,listOftodos:shuffleArray}; 
        //     }else
        //     {
        //         return  state; 
        //     }    
            
       // return state;



        case Types.UPDATE_TABLE:
            let st = false 
            return  Object.assign({},state,{isTableUpdate:!state.isTableUpdate});
        case Types. UPDATE_MINUTES:
            
                return  Object.assign({},state,{settledTime:state.settledTime-1}); 
        case Types.START_TIMER:
            return   Object.assign({},state,{isTimerStarted:!state.isTimerStarted});   
       
        case Types.NEXT_TODO:
            const newCurTodo:number = state.currentTodoNumber+1; 
            const newSettledTime:number = state.listOftodos[newCurTodo].amount;
          

            return {...state,currentTodoNumber:(newCurTodo),settledTime:newSettledTime}
          
        case Types.FINISH_TODOLIST:
            return {...state,listOftodos:[]}
        case Types.RESET_TIMER:
            return {...state,isTimerStarted:false,isStarted:false,isShuffled:false,currentTodoNumber:0,currentTodo:""}

        case Types.UPDATE_TIMER:
            
            return {...state,isTimerUpdated:!state.isTimerUpdated}





            default: return state;
    }
}  