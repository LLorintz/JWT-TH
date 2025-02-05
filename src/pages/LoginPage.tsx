import { useState } from "react"
import { UseAuth } from "../context/AuthContext"

const LoginPage = () => {
  
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
   
    const {login} = UseAuth()

    const handleUsername = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setUsername(e.target.value)
    }
  
    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setPassword(e.target.value)
    }
  
    const handleLogin = async()=>{
      try {
        const response = await fetch('http://localhost:3000/login', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({username,password})
        });
        if (!response.ok) {
          throw new Error
        }
        const data = await response.json()
        if (data.success) {
          login(data.token)
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    const handleGetinfo=async()=>{
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:3000/accounts/${username}`, {
          headers:{
            "Authorization":`Bearer ${token}` 
          }
        })
        if (!response.ok) {
          throw new Error
        }
        const data = await response.json();
        console.log(data)
    } catch (error) {
      console.log(error)
    }
    }
  
    return (
      <>
      <div>
        <input value={username} onChange={handleUsername} type="text" placeholder='username' />
        <input value={password} onChange={handlePassword} type="password" placeholder='password'/>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleGetinfo}>getInfo</button>
      </div>
      </>
    )
}

export default LoginPage