import '../../styles/global.scss'
import '../../styles/mural.scss'

import Exp1 from '../../images/exp1.png'
import Exp2 from '../../images/exp2.png'
import Exp3 from '../../images/exp3.png'
import Exp4 from '../../images/exp4.png'
import Exp5 from '../../images/exp5.png'
import Exp6 from '../../images/exp6.png'

import Logo1 from '../../images/logo1.png'
import Logo2 from '../../images/logo2.png'
import Logo3 from '../../images/logo3.png'
import Logo4 from '../../images/logo4.png'

function Mural() {

  return (
    <div className="muralContainer">
      <div className='muralTittle'>
        <p>use a hashtag #brasilisverigudi</p>
        <h2>Nosso mural de Experiências</h2>
      </div>
      <div className='muralGrade'>
        <img src={Exp1} />
        <img src={Exp2} />
        <img src={Exp3} />
        <img src={Exp4} />
        <img src={Exp5} />
        <img src={Exp6} />
      </div>
      <div className='logosBox'>
        <LogoBox logo={Logo1} texto='O melhor do Brasil' corFundo='#EEEEEE' corTexto='#005BD5' />
        <LogoBox logo={Logo2} texto='Cidades mais frequentadas' corFundo='#005BD5' corTexto='#fff' />
        <LogoBox logo={Logo3} texto='Pontos turísticos' corFundo='#EEEEEE' corTexto='#005BD5' />
        <LogoBox logo={Logo4} texto='Restaurantes' corFundo='#005BD5' corTexto='#fff' />
      </div>
    </div>
  )
}

export default Mural

function LogoBox(props: { logo: string; texto: string; corFundo: string; corTexto: string; }){
  return(
    <div className='logoBox' style={{backgroundColor: `${props.corFundo}`}}>
      <img src={props.logo} />
      <h3 style={{color: `${props.corTexto}`}}>{props.texto}</h3>
    </div>
  )
}