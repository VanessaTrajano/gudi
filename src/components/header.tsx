import Gudi from '../images/gudi.png'
import '../styles/header.scss'
import '../styles/global.scss'

function Header() {

  return (
    <header className="header">
      <img src={Gudi} className="headerImage"/>

      <nav>
        <ul className='navigation'>
            <li>Sobre</li>
            <li>Benefícios</li>
            <li>Contatos</li>
            <button className='button'>AGENDAR</button>
        </ul>
      </nav>
    </header>
  )
}

export default Header
