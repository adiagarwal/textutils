import React from 'react';
import { useState } from 'react';
export default function Textbox(props) {
    const handleLoclick = ()=>{
      let newtext = state.toLowerCase()
      setState(newtext)
    }
    const handleUpclick = ()=>{
      let newtext = state.toUpperCase()
      setState(newtext)
    }
    const clear = ()=>{
      setState('')
    }
    const handlechange = (event)=>{setState(event.target.value)}
    const [state , setState] = useState('')

    const copy = ()=>{
      var text = document.getElementById('box');
      navigator.clipboard.writeText(text.value)
    }
    const removeSpace = ()=>{
      let newtext = state.split(/[ ]+/)
      setState(newtext.join(' '))
    }
   
  return (
    <div className='container'>
    <div class="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" id="box" rows="8"  value={state} onChange={handlechange} style ={props.mode === 'dark'?{backgroundColor : 'grey',color:'white'} : {backgroundColor : 'white',color:'black'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2"  onClick={handleLoclick}>Change to Lower!</button>
    <button className="btn btn-primary mx-2"  onClick={handleUpclick}>Change the Upper!</button>
    <button className="btn btn-primary mx-2"  onClick={copy}>Copy Text</button>
    <button className="btn btn-primary mx-2"  onClick={removeSpace}>Remove-Extra-Spaces</button>
    <button className="btn btn-primary mx-2"  onClick={clear}>Clear Text</button>
    <div className='container my-4'>
      <h4>Your Text Summary</h4>
      <p>{state.length} characters and {state.length === 0 ? 0 : state.split(' ').length} words</p>
      <p>{state.length === 0 ? 0 : state.split(' ').length * 0.008} time read</p>
      <h5>Preview</h5>
      <p>{state}</p>
    </div>
    </div>
  );
}
