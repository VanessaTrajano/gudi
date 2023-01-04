import '../../../styles/global.scss'
import '../../../styles/viagensNacionais.scss'

function ViagensNacionais(props: { titulo: string ; texto: string ; corFundo1: string ; corFundo2: string ; corGeral: string;  }) {

  return (
    <div className="containerVN" style={{backgroundImage: `linear-gradient(${props.corFundo1}, ${props.corFundo2})`, color: `${props.corGeral}`}}>
      <div className='tracoDiv'>
        <div className="traco" style={{backgroundColor: `${props.corGeral}`}}></div>
        <p>VIAGENS NACIONAIS</p>
      </div>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
      <button style={{borderColor: `${props.corGeral}`}}>AGENDAR</button>
    </div>
  )
}

export default ViagensNacionais
