import { userState } from "../redux/fortypes";
import { useTypeSelector } from "../redux/hooks/useTypeSelector";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentDuration, deleteTodo, randTodos, startTimer, start_todo, updateTable } from "../redux/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFire, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { isTemplateExpression } from "typescript";
import "./listoftodos.css";
import TodoElement from "./todoElement";
import { Dispatch, useEffect, useState } from "react";
import { AnyAction } from "redux";
import ButtonAdd from "./ButtonAdd";
import TodoInput from "./TodoInput";
import ControlButtons from "./ControlButtons";

// function delay(ms: number) {
//     return new Promise( resolve => setTimeout(resolve, ms) );
// }

 function ListOfTodos(){
 
    const state:userState = useTypeSelector(state=> state.reducer);
    const dispatcher = useDispatch();
    let elements:JSX.Element[] = []
    const [wasUpdate,setUpdate]=useState<JSX.Element[]>([
        TodoElement(0,state,dispatcher,"",true),
        TodoElement(1,state,dispatcher,"",true),
        TodoElement(2,state,dispatcher,"",true),
        TodoElement(3,state,dispatcher,"",true),
        TodoElement(4,state,dispatcher,"",true)
    ]);
    const [todos,setTodos] = useState([])
    
   
 
    useEffect(() => {
        console.log("state.isStarted",state.isStarted)
        
        if(state.isStarted) {
            let z = state.listOftodos.length;
            for(let i=0;i< z;i++)
        {
            console.log("========================================= begin to hide todos")
            elements[i] = TodoElement(i,state,dispatcher,state.listOftodos[i].todo,false);
        }
        setUpdate(arr=>[...elements]);
           console.log("===========================the final event=============================================")
          const timer = setTimeout(() => {
            
              
                  for(let i=0;i< z;i++)
            {
              
                elements[i] = TodoElement(i,state,dispatcher,state.listOftodos[i].todo,true);  
             
            
            }
            setUpdate(arr=>[...elements]);
            console.log("timer")
           
            },
            300);
            
            console.log("change order of todo list |ListOfTodo.tsx|83")
            const time2 = setTimeout(() => { 
                dispatcher(randTodos()) ;
                
                setUpdate(arr=>[...elements]);
               
               
                dispatcher(startTimer());
            
            },200);
        }
      }, [state.isStarted]);


    useEffect(()=>{ 
        let t=false;
    if(state.isTableUpdate)
       {setUpdate(arr=>[...elements]);
      
        dispatcher(updateTable());
     
    }},[elements,state.isTableUpdate,state.listOftodos])

    // useEffect(()=>{
    //     if(state.isStarted)
    //     {
    //     console.log("change order of todo list |ListOfTodo.tsx|83")
    //     const timer = setTimeout(() => { 
    //         dispatcher(randTodos()) ; 
    //         dispatcher(updateTable());
    //         dispatcher(startTimer());
        
    //     },200);
    //     }  
    // },[state.isStarted])


    
    // active button is gold, light button with cursor pointer and white. 
    // const setActiveButton=(item:number,state:number)=>{
    //     return item==state ? "active-buton":"light-button"
    // }
    
    // const setNewDuration = (index:number,state:number)=>{
    //     dispatcher(changeCurrentDuration(index,state))
    // }
    
    ///if (state.isStarted){
        

        
       
//         dispatcher(randTodos()) ;
//         for(let i=0;i<5;i++)
//   {
    
//       elements[i] = TodoElement(i,state,dispatcher,state.listOftodos[i].todo,true);  
  
//   }
        // (async () => { 
        //     // Do something before delay
        //     console.log('before delay')
        
        //     await delay(1000);
        //      dispatcher(randTodos()) 
        //     for(let i=0;i<5;i++)
        //         {
                  
        //             elements[i] = TodoElement(i,state,dispatcher,state.listOftodos[i].todo,true);
                    
                
        //         }
        //         setUpdate(arr=>[...elements]);
        //     // Do something after

        //     console.log('after delay')
           
        // })();
        
        // useEffect(() => {
        //     const timer = setTimeout(() => {
        //       setItShown(true);
        //     }, 1000);
          
        //     // 👇️ runs when component unmounts
        //     return () => {
        //       clearTimeout(timer);
        //     };
        //   }, []);

    //    let t = takeUntil(timer(1000)).subcribe(x=>{
    //         console.log("timer x >",x)
    //         dispatcher(randTodos()) 
    //         elements.splice(0,5);
    //         for(let i=0;i<5;i++)
    //             {
                  
    //                 elements[i] = TodoElement(i,state,dispatcher,state.listOftodos[i].todo,true);  
                
    //             }
    //             setUpdate(arr=>[...elements]);
          
    //     });
        
    // const source = timer(1000);
    // const subcribe = source.pipe(take(1000)).subscribe((val)=>{
    //     // dispatcher(randTodos()) 
    //     elements.splice(0,5);
    //     for(let i=0;i<5;i++)
    //         {
              
    //             elements[i] = TodoElement(i,state,dispatcher,state.listOftodos[i].todo,true);  
            
    //         }
    //         setUpdate(arr=>[...elements]);
    //         console.log(val);
    //         return 1;
    // });    
    //    let set =  setTimeout(()=>{
    //     console.log("========randomize data===========")
    //     dispatcher(randTodos()) ;},3000)
    //    clearInterval(set);
       
    ///    timer(1000).pipe(finalize(()=>{console.log("?????????????/")})).subscribe(x=>{console.log("!!!!!!!!!!!")})
        
    //    return <div>{wasUpdate} {elements}</div>
    //}
    //else{
      
        const arr_length = state.listOftodos.length 
        if(state.isTableUpdate)
        {
        for(let i = 0;i<5;i++)
        {
            console.log("cur position in list:",i)
            if( (arr_length-1)<i){
                console.log("empty position",i)
                elements.push(TodoElement(i,state,dispatcher))
             //  updateRender()
  
            }else{
               console.log("filled positon",state.listOftodos)
                elements.push(TodoElement(i,state,dispatcher,state.listOftodos[i].todo))
              
            }
        }
        //dispatcher(updateTable())
        }
    

    return (<div className="todo-container"><div className="complete-todo-list"> {wasUpdate}</div>
       <div>{TodoInput()}</div>

        <ControlButtons />
    
    </div>
    )
   //}
}


export default ListOfTodos