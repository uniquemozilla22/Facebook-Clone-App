import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import  Widgets  from './Widgets';
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {

  const [{user},dispatch]=useStateValue();

  if(user=== null)
  {
    return(
        <Login />
    )
  }
  else{
    return (
      <div className="app">
  
        {}
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
       
  
       </div>
    );
  }
  
  
}

export default App;
