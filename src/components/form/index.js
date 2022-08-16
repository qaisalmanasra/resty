import React, { useRef, useState, useEffect } from 'react'
import './form.scss'
import axios from 'axios';


function Form(props) {
  const [click, setClick] = useState('GET');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState({});

  const selectmethod = useRef()
  const handleSubmit = e => {
    e.preventDefault();
    
      
      const formData = {
        method: click,
        url: url,
      };
      const bodyData = {
        body: body,
      };
      
      props.handleApiCall(formData, bodyData)
       

        click === 'POST' ? 
        axios
          .post(formData.url, JSON.parse(body))
          .then((res) => {
            setUrl(e.target.value);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }) 
        : null;

    
     
    
  }

  const handelClick = e => {
    e.preventDefault();
    setClick(e.target.value);
  }
  const handelUrl = e => {
    e.preventDefault();
    setUrl(e.target.value);
  }
  const handleBody = e => {
    e.preventDefault();
    setBody(e.target.value);
  }


  // const handelPost = (e) => {
    
  //   axios.post(url, body)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  useEffect(() => {
    selectmethod.current.childNodes.forEach((a) => (a.addEventListener("click", saveData)))
  }, [])
  const saveData = (e) => {
    selectmethod.current.childNodes.forEach((a) => (a.classList.remove("active")))
    e.currentTarget.classList.add("active")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='label-input'>
          <span>URL: </span>
          <input name='url' type='text' className='input' placeholder='Enter a URL' data-testid='input' onChange={handelUrl} />
          <button type="submit" className='btn' data-testid='submit'>GO!</button>
        </label>
        <label className="methods">
          <div className='btns' ref={selectmethod}>
            <button id="get" data-testid='get' onClick={handelClick} value='GET'>GET</button>
            <button id="post" data-testid='post' onClick={handelClick} value='POST'>POST</button>
            <button id="put" data-testid='put' onClick={handelClick} value='PUT'>PUT</button>
            <button id="delete" onClick={handelClick} value='DELETE'>DELETE</button>
          </div>
        </label>
        
        {click === 'POST' || click === 'PUT' ? 
        <div>
          <input type='JSON' className='label-input-body' onChange={handleBody} placeholder='Write a json object' 
          />
        </div>:null}
    
        

      </form>
    </>
  )

}

export default Form;