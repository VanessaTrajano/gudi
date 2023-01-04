import { useState } from 'react'
import logo from './logo.svg'
import Header from './components/header'
import Busca from './components/main/busca'
import MainViagens from './components/main/mainViagens/mainViagens'
import Mural from './components/main/mural'
import FaleConosco from './components/main/faleConosco'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Busca />
      <MainViagens />
      <Mural />
      <FaleConosco />
      <Footer />
    </div>
  )
}

export default App
