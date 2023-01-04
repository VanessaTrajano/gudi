import '../../styles/busca.scss'
import '../../styles/global.scss'
import background from '../../images/imageBusca.png'

function Busca() {

  return (
    <div className="containerBusca">
      <img src={background} className='background' />
      <div className='buscaBox'>
        <h1 className='tittle'>Para qual estado você deseja ir?</h1>
        <input className='input' placeholder='Pesquisar' type='text' />
        <button className='buttonBusca'>BUSCAR</button>
      </div>
    </div>
  )
}

export default Busca
