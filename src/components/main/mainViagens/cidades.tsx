import '../../../styles/global.scss'
import '../../../styles/cidades.scss'

function Cidades(props: { nome: string ; image: string }) {

  return (
    <div className="cidadesContainer">
      <img src={props.image}/>
      <button>{props.nome}</button>
    </div>
  )
}

export default Cidades
