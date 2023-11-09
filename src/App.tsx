import { useState } from 'react'
import './App.css'
import Login from "./Login.tsx"
import Home from "./Home.tsx"

function App() {
  const [isConnected, setConnected] = useState(false)

  return (
   isConnected ? <Home connectUser={()=>setConnected(false)}/> : <Login connectUser={()=>setConnected(true)}/>
  )
}

export default App
