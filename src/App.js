import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import  Widgets  from './Widgets';
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {

  let [{user},dispatch]=useStateValue();

  

  return(
    <div className="app">
      {!user?(
        <Login/>
      ):(
        <div>
        <Header/>

        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
        </div>
      )}
    </div>
    
  );   
  }export default App;
