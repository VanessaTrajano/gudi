import { useState } from 'react'
import logo from './logo.svg'
import Header from './components/header'
import Busca from './components/main/busca'
import MainViagens from './components/main/mainViagens/mainViagens'
import Mural from './components/main/mural'
import FaleConosco from './components/main/faleConosco'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Busca />
      <MainViagens />
      <Mural />
      <FaleConosco />
    </div>
  )
}

export default App
