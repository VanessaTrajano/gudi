import '../../styles/global.scss'
import '../../styles/faleConosco.scss'

function FaleConosco() {

  return (
    <div className="faleContainer">
      <h2>Fale conosco</h2>
      <input className='input1' placeholder='Digite seu melhor email' type='email'/>
      <input className='input1' placeholder='Assunto' type='text'/>
      <input className='input2' placeholder='Escreva a sua mensagem' type='text'/>
      <button>Enviar</button>
    </div>
  )
}

export default FaleConosco
