import { useEffect, useState } from "react"
import { UseAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
   
    const {login, isAuthenticated} = UseAuth()
    const navigate = useNavigate()

    const handleUsername = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setUsername(e.target.value)
    }
  
    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setPassword(e.target.value)
    }
  
    useEffect(()=>{
      const token = localStorage.getItem('token')
      if (token && !isAuthenticated) {
        login(token)
        navigate('/transactions')
      }
    },[isAuthenticated, login,navigate])


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
          localStorage.setItem('user', username)
          login(data.token)
        }
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
       
      </div>
      </>
    )
}

export default LoginPage