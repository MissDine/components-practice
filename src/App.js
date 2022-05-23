import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';

class App extends React.Component{
  render(){
    return(
      <div>
        <Greet/>
        <Hello/>
      </div>
    )
  }
}
export default App;
