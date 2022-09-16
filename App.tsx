import React from 'react';
import './App.css';
import Timer from './Timer';
import { useDispatch } from 'react-redux';
import { start_todo } from './redux/actions';
import Settings from './Settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMusic, faCoffee,faGear, faQuestion, faLightbulb, } from '@fortawesome/free-solid-svg-icons'
import { Windows } from './redux/types';
import { showWindow } from './redux/actionsUI';
import PlayLists from './Playlists';
import Suggestion from './Suggestion';
import ListOfTodos from './components/ListOfTodo';
import Help from './Help';
import {Helmet} from "react-helmet";
function App() {
 
  const dispatcher = useDispatch()
  const showMenu = (menu:Windows)=>{
    dispatcher(showWindow(menu))  
    // switch(menu)
    // {
    //   case Windows.SETTINGS_WINDOW:
    //   dispatcher(showWindow(Windows.SETTINGS_WINDOW))  
    //   break;
    //   case Windows.PLAYLIST_WINDOW:
        
    //   break;
    //   case Windows.SUGGESTION_WINDOW:break;
    //   default:break;
    // }
  }



  return (
    <div className="App">

      <header className="App-header">
        <div id='settings'>
          <Helmet>
            <title>Todo Shuffle | Antiprocrastination App</title>
            <meta name="author" content='Eugene Lapanik' />
            <meta charSet='UTF-8'/>
            <meta name="description" content='Todo Shuffle can help you to fight procrastination, and also organise your life' />
            <meta name="keywords" content='todo, planner, pomodoro, todo-list, GTD, free service' />
            <meta name='viewport' content='initial-scale=1.0 width=device-width' />
             
          </Helmet>
          <ul>
              <li key={"menu1"}><FontAwesomeIcon icon={faGear} title="settings" 
                    className="UIButton" onClick={()=>showMenu(Windows.SETTINGS_WINDOW)} /></li>
              <li key={"menu2"} ><FontAwesomeIcon icon={faMusic} title="playlist for concetration" 
                    className="UIButton" onClick={()=>showMenu(Windows.PLAYLIST_WINDOW)} /></li>
              <li key={"menu3"}><FontAwesomeIcon icon={faQuestion} title="How it works?"  
                    className="UIButton" onClick={()=>showMenu(Windows.HELP_WINDOW)}  /></li>
              <li key={"menu4"}><FontAwesomeIcon icon={faLightbulb} title="I have idea!"  
                    className="UIButton" onClick={()=>showMenu(Windows.SUGGESTION_WINDOW)}  /></li>

          </ul>
          <Settings />
          <PlayLists />
          <Suggestion />
          <Help />
          </div>
      <h1><a href="http://todo-shuffle.com">ToDo Shuffle</a></h1>
      <p>No more f%$king excuses!</p>
      </header>
      
      <main>
        <Timer />
        <div id="todos">
            {ListOfTodos()}
         
            
             
            
    
            
        </div>
      
      
     
      </main>
      <footer>
      
        {/* 
        animation of changing orders for todos

        hide and show apps. 
        
        */}
        {/* <div  onClick={()=>showMenu(Windows.SUGGESTION_WINDOW)}>Suggestions?</div> */}
        <div><a href='https://ko-fi.com/insomniak'  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCoffee} /> Support the author</a></div>
       
         </footer>
    </div>
  );
}

export default App;
