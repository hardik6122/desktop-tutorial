import React, {useState} from 'react'


export default function TextForm(props) {
const handelUpclick = ()=>{
 // console.log("upper case was clicked");
  setText(text.toUpperCase())
  props.showalert('converted in uppercase','success')
  
}
const handelloclick = ()=>{
 // console.log("upper case was clicked");
  setText(text.toLowerCase())
  props.showalert('coverted in lowercase','success')
  
}
const handetoclear = ()=>{
  setText("")
  props.showalert('clear text','success')
}
const handetocopy = ()=>{
  navigator.clipboard.writeText(text);
  props.showalert('copy to clipbord','success') 
}
const handelonchange = (event)=>{
  
  setText(event.target.value)
}


    const [text, setText] = useState('');
    //text = "new text;" // wrong way to change the state
    //setText("new text"); // Correct way to change the state
    var arr = text.split("");
    var texts = 0;
    for (let inx in arr) {
      
      if (arr[inx] !== ' '){
        texts+=1
      }
      
    }
    var arr1 = text.split(" ");
    var texts1 = 0;
    for (let inx in arr1) {
      
      if (arr1[inx] !== ''){
        texts1+=1
      }
      
    }
   
    console.log(texts1)
  return (
    <div style={{backgroundColor:props.mode===`dark`?props.color1:'white',color:props.mode===`dark`?'white':'black'}}>

    <div className='container'>
      <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} id="my box" rows="3" onChange={handelonchange} placeholder='Enter Text here 'style={{backgroundColor:props.mode===`dark`?props.color1:'white',color:props.mode===`dark`?'white':'black'}}></textarea>
</div>
<button className='btn btn-outline-primary me-4' onClick={handelUpclick}>Convert To Upper Case</button>
<button className='btn btn-outline-primary me-4' onClick={handelloclick}>Convert To lover case</button>
<button className='btn btn-outline-info me-4' onClick={handetocopy} id='copy'>Copy to clipbord</button>
<button className='btn btn-outline-danger' onClick={handetoclear} >Clear</button>
    </div>
    <div className="container my-2">
      <h1>Your text summery</h1>
      <p>{texts1} words,{texts} charactor</p>
      <p>{parseInt((0.008*texts1)*60)}seconds read time</p>
      <h3>Preview</h3>
      <p>{text===""?'enter text to view Preview':text}</p>
    </div>
  </div>)
}
