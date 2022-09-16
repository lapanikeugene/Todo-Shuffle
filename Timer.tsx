import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { finishTodo, nextTodo, resetTimer, updatesMinutes, updateTable, updateTimer } from "./redux/actions";
import { userState } from "./redux/fortypes";
import { useTypeSelector } from "./redux/hooks/useTypeSelector";



function Timer()
{
   let s = new Audio("https://eugenelapanik.com/assets/sounds/beep-6-96243.mp3");
   const state:userState = useTypeSelector(state=> state.reducer);
   const [minutes,setMinutes] =useState<number>(0);
   const [seconds,setSeconds] = useState<number>(0);
   const [showMinutes,setShowMinutes] = useState<string>("00");
   const [showSeconds,setShowSeconds] = useState<string>("00")
   //console.log("updated time",useState<number>(state.settledTime))
   
   const dispatcher = useDispatch();

    useEffect(()=>{
   
      if(state.isTimerUpdated)
      {
        setSeconds(0)
        dispatcher(updateTimer());
      }

      
      if(state.isTimerStarted)
      {      
      
     
         setMinutes(state.settledTime);
         
         const interval = setInterval(()=>{
            // need second check to handle pause/resume button
            if(state.isTimerStarted)
            {
            if(seconds<=0&&minutes>0){
               setSeconds(60)
              
               dispatcher(updatesMinutes());
               setMinutes(minutes=>minutes-1);
            }
            setSeconds(seconds=>seconds-1);
            
            setShowMinutes((minutes as unknown) as string);
            setShowSeconds((seconds as unknown) as string)

            if(minutes <10)
            setShowMinutes("0"+(minutes as unknown) as string);
            if(seconds<10)
            setShowSeconds("0"+(seconds as unknown) as string);


            //section with next todos and complete list of todos. 
            if(minutes<=0 && seconds <=0 && state.currentTodoNumber === (state.listOftodos.length-1))
            {
             dispatcher(finishTodo());
             dispatcher(resetTimer());
             dispatcher(updateTable());
             s.play()

            }else if(minutes<=0 && seconds <=0)
            {
               dispatcher(nextTodo());
               dispatcher(updateTimer());
               dispatcher(updateTable());
              
               s.play()
            }

            //console.log("tik",minutes,seconds);
         } },1000)
         

         return ()=>clearInterval(interval)
      }else if(!state.isStarted){
         setShowMinutes("00"); 
         setShowSeconds("00");
         setMinutes(0);
         setSeconds(0);

      }
     
   },[minutes,seconds,state.isTimerStarted,state.settledTime])

 return(
    <h2> {showMinutes}:{showSeconds}</h2>
 )
}


export default Timer