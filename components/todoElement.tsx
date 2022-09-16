import { faFire, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { changeCurrentDuration, deleteTodo } from "../redux/actions";
import { userState } from "../redux/fortypes";
 
const TodoElement = (index:number,state:userState,dispatcher:Dispatch<AnyAction>,str:String="",showElement:boolean=true) =>{
    
    let istyle:string = ""
   
    const setNewDuration = (index:number,state:number)=>{
        dispatcher(changeCurrentDuration(index,state))
    }
    const setActiveButton=(item:number,cstate:number)=>{
        if(!state.isStarted)
        {
                return item==cstate ? "active-buton":"light-button"
        }else{
            return item==cstate ? "active-buton":"transparent-button"
        }
    }

    // if timer is starting this class will make every stroke except of 1 grey color 
    console.log("cur position vs currentTodoNumber|todoElements|26")
    if(index < state.currentTodoNumber)
    {
        istyle="grayed-line-of-todo done-todo";
    }else if(index == state.currentTodoNumber)
    {
       istyle="";
    }else if(index!==0 && state.isStarted)
        istyle="grayed-line-of-todo";

    

    if(str!==""){
        
    const item =  state.listOftodos[index];

    //console.log("show or hidden?",showElement);
    let classShow = showElement===true ? 'show-todo':'hide-todo';
    //console.log("class to show",classShow)
    //console.log("begin to render todo element",item)
    return (   <div className={`todo`} key={`key${index}`} >
    <span>{index+1}.&nbsp; </span> <span className={classShow}>
        <span className={`todoText ${istyle}`}>{str}</span>
    <span className="fire-buttons">
        {!state.isStarted ?  <span className="fire-buttons">
            <FontAwesomeIcon icon={faFire} title={state.easy+" min"} onClick={()=>setNewDuration(index,state.easy)} 
                                className={setActiveButton(item.amount,state.easy)} />
    <FontAwesomeIcon icon={faFire} title={state.medium+" min"} onClick={()=>setNewDuration(index,state.medium)} 
                                className={setActiveButton(item.amount,state.medium)} />
    <FontAwesomeIcon icon={faFire} title={state.hard+" min"} onClick={()=>setNewDuration(index,state.hard)}
                                    className={setActiveButton(item.amount,state.hard)} /> </span>:
                                    <span className="fire-buttons">
                  <FontAwesomeIcon icon={faFire} title={state.easy+" min"} 
                                className={setActiveButton(item.amount,state.easy)} />
    <FontAwesomeIcon icon={faFire} title={state.medium+" min"} 
                                className={setActiveButton(item.amount,state.medium)} />
    <FontAwesomeIcon icon={faFire} title={state.hard+" min"} 
                                    className={setActiveButton(item.amount,state.hard)} /> </span>
                                    
                                }
       </span>                             

   {!state.isStarted ? <span onClick={()=>dispatcher(deleteTodo(index))} className="but-x"><FontAwesomeIcon 
                                icon={faX} title="Delete task" /></span>:""}
    </span> 
    </div> );
    }else{
        return(
            <div className="todo"  key={`key${index}`}>
              <span>{index+1}.</span> {str}
            </div>
        )
    }
}




export default TodoElement