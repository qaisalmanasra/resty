// import React from 'react';

// import './form.scss';

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;

import React, { useEffect, useRef, useState } from 'react';

import './form.scss';


function Form({callApi}) {
  const url_section=useRef()
  const selectmethod=useRef()
  const [method,setmethod]=useState(false)
  const [showerror,setshowerorr]=useState(false)

  const handleSubmit =( e )=> {
    e.preventDefault();
    let text_url= url_section.current.value
    if(method==false||text_url.length<1){
      setshowerorr(true)
    }else{
      setshowerorr(false)
      const formData = {
        method:method,
        url: text_url,
      };
      callApi(formData)  
    }
  }


  useEffect(()=>{
       selectmethod.current.childNodes.forEach((a)=>(
        a.addEventListener("click", saveData)
    ))          
  },[])
  const saveData=(e)=>{
    setmethod(e.currentTarget.textContent)
    selectmethod.current.childNodes.forEach((a)=>(a.classList.remove("active")))
    e.currentTarget.classList.add("active")
  }

  return (
    <>
      <form >
        <label >
          <span>URL: </span>
          <input name='url' type='text' ref={url_section} placeholder="insert url here ....."/>
          <button type="submit" onClick={handleSubmit} style={{cursor:"pointer"}} data-testid="submit">GO!</button>
        </label>
        <label className="methods" ref={selectmethod}>
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
      {showerror==true?<p style={{color:"red"}}>You Need Insert Method And Url</p>:<></>}
  </>
)
}

export default Form