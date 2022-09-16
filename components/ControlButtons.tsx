import { useDispatch } from "react-redux"
import { add_to_todo_list, finishTodo, nextTodo, resetTimer, startTimer, start_todo, updateTable, updateTimer } from "../redux/actions";
import { userState } from "../redux/fortypes";
import { useTypeSelector } from "../redux/hooks/useTypeSelector";
import "./controlbuttons.css";
function ControlButtons ()
{
    const state:userState = useTypeSelector(state=> state.reducer);
    const dispatcher = useDispatch();
    const makeTodoListGreatAgain = () =>{
        // make nice smooth way to show random todos. 
        if(state.listOftodos.length===0)
        {
      const p = new Promise((res,rej)=>{
        console.log("start promise")
        
            for (let index = 0; index < 5; index++) {
            const s =    setTimeout(()=>{ dispatcher(add_to_todo_list(state.medium));dispatcher(updateTable());},index*300,index);
                
            }
            //didn't find another way to start resolve function after ending of for-loop.
            setTimeout(()=>{ res(()=>0)},5*300);   
       
      
        
    }).then(()=>{console.log("starting timer after random todo list was shown"); dispatcher(start_todo())})
    }else{
        dispatcher(start_todo());
    }
}
    const nextTodoBut = () => {
        if(state.currentTodoNumber===(state.listOftodos.length-1))
        {
            dispatcher(finishTodo());
            dispatcher(resetTimer());
        }
        else{
        dispatcher(nextTodo());
        dispatcher(updateTimer());
        }
        dispatcher(updateTable());
    }
    if(state.isStarted)
    return (
        <div>
       
      
        <span onClick={()=>{dispatcher(startTimer())}} className="cb-pause"><span>{state.isTimerStarted? "Puase": "Resume"}</span></span>
        <span onClick={()=>{nextTodoBut()}} className="cb-next">
                <span>{state.currentTodoNumber===(state.listOftodos.length-1)?"Complete":"Next"}</span>
            </span>
        </div>
    )

    else
    return (
        <div>
        <span onClick={()=>{makeTodoListGreatAgain()}} className="cb-start"><span> start</span></span>
        
        </div>
    )
}


export default ControlButtons