import { useState } from 'react'
import logo from './logo.svg'
import Header from './components/header'
import Busca from './components/main/busca'
import MainViagens from './components/main/mainViagens/mainViagens'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Busca/>
      <MainViagens/>
    </div>
  )
}

export default App
