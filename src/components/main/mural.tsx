import '../../images/global.scss'

import Exp1 from '../../images/exp1.png'
import Exp2 from '../../images/exp2.png'
import Exp3 from '../../images/exp3.png'
import Exp4 from '../../images/exp4.png'
import Exp5 from '../../images/exp5.png'
import Exp6 from '../../images/exp6.png'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

function Mural() {

  return (
    <div className="muralContainer">
      <div>
        <p>use a hashtag #brasilisverigudi</p>
        <h2>Nosso mural de Experiências</h2>
      </div>
      <div>
        <img src={Exp1} />
        <img src={Exp2} />
        <img src={Exp3} />
        <img src={Exp4} />
        <img src={Exp5} />
        <img src={Exp6} />
      </div>
      <div>
        <LogoBox logo='' texto='O melhor do Brasil' />
        <LogoBox logo='' texto='Cidades mais frequentadas' />
        <LogoBox logo='' texto='Pontos turísticos' />
        <LogoBox logo='' texto='Restaurantes' />
      </div>
    </div>
  )
}

export default Mural

function LogoBox(props: { logo: string; texto: string }){
  return(
    <div>
      <img src={props.logo} />
      <h3>{props.texto}</h3>
    </div>
  )
}