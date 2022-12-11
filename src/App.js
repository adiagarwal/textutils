import Nav from "./components/Nav"
import Textbox from "./components/Textbox"
import './App.css';
import { useState } from "react";
//import About from "./components/About";
//import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  let [mode , setmode] = useState('light')

  const change = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
   
  }
  return (
      <>
          <Nav title="Text Utils" about="About-TextUtils" mode={mode} toggle = {change} />
          <Textbox heading="Enter Your Text Here!" mode={mode}/>
      </>
       
   
  );
}

export default App;
