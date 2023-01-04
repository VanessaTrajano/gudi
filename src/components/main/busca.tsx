import '../../styles/busca.scss'
import '../../styles/global.scss'
import background from '../../images/imageBusca.png'
import backgroundMobile from '../../images/imageBuscaMobile.png'

function Busca() {

  return (
    <div className="containerBusca">
      <img src={background} className='backgroundPc' />
      <img src={backgroundMobile} className='backgroundMobile' />
      <div className='buscaBox'>
        <h1 className='tittle'>Para qual estado você deseja ir?</h1>
        <input className='input' placeholder='Pesquisar' type='text' />
        <button className='buttonBusca'>BUSCAR</button>
      </div>
    </div>
  )
}

export default Busca
