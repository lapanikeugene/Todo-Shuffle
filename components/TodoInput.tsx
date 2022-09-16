import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_todo_list, updateCurrentTodo, updateTable } from "../redux/actions";
import { userState } from "../redux/fortypes";
import { useTypeSelector } from "../redux/hooks/useTypeSelector";
import ButtonAdd from "./ButtonAdd";
import "./todoinput.css"

const TodoInput = () =>{

    const [textOfTodo,setText] = useState("")
    const [textOfTodoButton,setTextButton] = useState("")

    const dispatcher = useDispatch();
    const state:userState = useTypeSelector(state=> state.reducer);

    useEffect(()=>{    
        if(state.currentTodo==="")
        {setText("")}
    })

         //add enter handle when user add some text to todo input element. 
    const handleEnter = (e: { key: string; })=>{
       // e.preventDefault();
        if(e.key === "Enter")
        {
           console.log("enter pressed|TodoInput|28")
           dispatcher(add_to_todo_list(state.medium))
           dispatcher(updateTable())
        }
    }

   

    return   <div id="todo-input"><input type="text" value={textOfTodo } maxLength={35} placeholder="write your task here"
               disabled={state.isStarted||state.listOftodos.length>=5} 
               onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                {dispatcher(updateCurrentTodo(e.target.value)); setText( e.target.value);}} 
                onKeyDown={handleEnter} 
                /> 
                {ButtonAdd([state.listOftodos.length,textOfTodoButton,state.easy])}
            </div>
}


export default TodoInput