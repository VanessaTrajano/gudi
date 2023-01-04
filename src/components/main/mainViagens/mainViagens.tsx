import ViagensNacionais from './viagensNacionais'
import vn1 from '../../../images/vn1.png'
import vn2 from '../../../images/vn2.png'
import vn3 from '../../../images/vn3.png'

import '../../../styles/global.scss'
import '../../../styles/mainViagens.scss'

function MainViagens() {

  return (
    <div className="containerViagens">
      <div className='boxViagens'>
        <img src={vn1} />
        <ViagensNacionais titulo='O clima perfeito, no lugar perfeito' texto='Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.' corFundo1='#005BD5' corFundo2='#002E6B' corGeral='#fff' />
      </div>
      <div className='boxViagens'>
        <ViagensNacionais titulo='Curta uma nova vibe entre amigos' texto='Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi.' corFundo1='#fff' corFundo2='#fff' corGeral='#005BD5' />
        <img src={vn2} />
      </div>
      <div className='boxViagens'>
        <img src={vn3} />
        <ViagensNacionais titulo='Algumas experiências são inexplicáveis' texto='Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural.' corFundo1='#005BD5' corFundo2='#002E6B' corGeral='#fff' />
      </div>
    </div>
  )
}

export default MainViagens
