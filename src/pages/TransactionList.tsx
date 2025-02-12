import { useEffect } from "react"


const TransactionList = () => {

  const handleGetinfo=async()=>{
    try {
        const username = localStorage.getItem('user')
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

    useEffect(()=>{
      handleGetinfo()
    },[])
  return (
    <div>TransactionList</div>
  )
}

export default TransactionList