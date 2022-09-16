import { useDispatch } from "react-redux";
import { add_to_todo_list, updateTable } from "../redux/actions";
import { userState } from "../redux/fortypes";
import { useTypeSelector } from "../redux/hooks/useTypeSelector";
import "./buttonadd.css"

const ButtonAdd = (props:[number,string,number]) =>{
    const state:userState = useTypeSelector(state=> state.reducer);

    let [amount, text_of_todo,time] = props;
    let dispatcher = useDispatch()
    const add_todo = (time:number)=>{
      dispatcher(add_to_todo_list(time))
      dispatcher(updateTable())
     
    }
    if(amount < 5)
    {
        return   <span><span className="button-easy"  onClick={()=>add_todo(state.easy)} title={`${state.easy} min.`}>{state.easy<10?"0"+state.easy:state.easy}</span>
                       <span className="button-medium"  onClick={()=>add_todo(state.medium)} title={`${state.medium} min.`}>{state.medium}</span>
                       <span className="button-hard"  onClick={()=>add_todo(state.hard)} title={`${state.hard} min.`}>{state.hard}</span>
      </span>
    }
    else
    {
        return <span><span className="button-easy button-disabled">{state.easy}</span>
        <span className="button-medium button-disabled"  >{state.medium}</span>
        <span className="button-hard button-disabled">{state.hard}</span>
</span>
    }



} 

export default ButtonAdd;