import { useState } from 'react'
import Gudi from '../images/gudi.png'

function Footer() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <nav>
                <img src={Gudi} />
                <ul>
                    <li>Sobre nós</li>
                    <li>Mural de memórias</li>
                    <li>Eventos Gudi</li>
                    <li>Nosso blog</li>
                </ul>
            </nav>
            <nav>
                <h3>Contato</h3>
                <ul>
                    <li>Chat Virtual</li>
                    <li>SAC Online</li>
                    <li>Ouvidoria</li>
                    <li>FAQ</li>
                </ul>
            </nav>
            <nav>
                <h3>Benefícios</h3>
                <ul>
                    <li>Conta digital Gudi</li>
                    <li>Viaje com Milhas</li>
                    <li>C6 Átomos</li>
                    <li>iD Jovem</li>
                </ul>
            </nav>
            <nav>
                <h3>Lugares</h3>
                <ul>
                    <li>O melhor do Brasil</li>
                    <li>Cidades frequentes</li>
                    <li>Pontos turísticos</li>
                    <li>Restaurantes</li>
                </ul>
            </nav>
            <nav>
                <h3>Curiosidades</h3>
                <ul>
                    <li>Cultura e tradições</li>
                    <li>Pratos típicos</li>
                    <li>Mitos brasileiros</li>
                    <li>Carnaval</li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer
