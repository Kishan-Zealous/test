import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate= useNavigate()
  const [login,setLogin]=useState({
    username:"",
    password:""
  })

  function onChangeHandler(e){
    const {name,value} = e.target
    setLogin((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }
  console.log(login)
  function loginHandler(e){
    e.preventDefault()
    fetch('http://localhost:8765/auth/login',{
      method:'POST',
      body:JSON.stringify({
          username: login.username,
          password: login.password
      }),
      headers: { 'Content-Type': 'application/json' }
  })
      .then(res=>res.json())
      .then(json=>navigate("/"))
  }
  return (
    <div className='container'>
    <div className='signup width-30'>
        <h1>Login</h1>
        <form className='signup-form' onSubmit={loginHandler}>
        <div className='persional-info'>
            <div className='input-container'>
            <div className='form-inputs'>
                <label>User name</label>
                <input type="text" name="username" value={login.username} onChange={onChangeHandler} />
            </div>
            </div>

             <div className='input-container'>
            <div className='form-inputs'>
                <label>Password</label>
                <input type="text" name="password" value={login.password} onChange={onChangeHandler} />
            </div>

            </div>

            <button className='btn-signup'>Login</button>
            </div>
        </form>
    </div>
</div>
  )
}
