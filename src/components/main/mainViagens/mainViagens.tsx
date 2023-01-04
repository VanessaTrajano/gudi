import ViagensNacionais from './viagensNacionais'
import vn1 from '../../../images/vn1.png'
import vn2 from '../../../images/vn2.png'
import vn3 from '../../../images/vn3.png'

import '../../../styles/global.scss'
import '../../../styles/mainViagens.scss'
import Cidades from './cidades'

import Rj from '../../../images/rj.png'
import RioOstras from '../../../images/rio-ostras.png'
import CaldasNovas from '../../../images/caldas-novas.png'
import Am from '../../../images/am.png'

function MainViagens() {

  return (
    <div className="containerViagens">
      <div className='boxViagens'>
        <img src={vn1} />
        <ViagensNacionais titulo='O clima perfeito, no lugar perfeito' texto='Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.' corFundo1='#005BD5' corFundo2='#002E6B' corGeral='#fff' largura='70%' />
      </div>
      <div className='boxViagens'>
        <ViagensNacionais titulo='Curta uma nova vibe entre amigos' texto='Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi.' corFundo1='#fff' corFundo2='#fff' corGeral='#005BD5' largura='75%' />
        <img src={vn2} />
      </div>
      <div className='boxViagens'>
        <img src={vn3} />
        <ViagensNacionais titulo='Algumas experiências são inexplicáveis' texto='Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural.' corFundo1='#005BD5' corFundo2='#002E6B' corGeral='#fff' largura='88%' />
      </div>
      <div className='boxCidades'>
        <Cidades nome='Rio de Janeiro' image={Rj}/>
        <Cidades nome='Rio das Ostras' image={RioOstras}/>
        <Cidades nome='Caldas Novas' image={CaldasNovas}/>
        <Cidades nome='Amazônia' image={Am}/>
      </div>
    </div>
  )
}

export default MainViagens
