import styles from './questions.module.css'
import { perguntas } from './pergunta'
import Radio from './Radio/index'
import { useState } from 'react'
const Questions = () => {
  const [active, setActive] = useState(true)
  const [respostas, setRespostas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  })

  const [slide, setSlide] = useState(0)
  const [resultado, setResultado] = useState(null)

  function handleChange({ target }) {
    setActive(false)
    setRespostas({ ...respostas, [target.id]: target.value })
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta)
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`)
  }

  function handleNext(event) {
    event.preventDefault()
    setActive(true)
    if (slide < perguntas.length - 1 && respostas) {
      setSlide(slide + 1)
    } else {
      setSlide(slide + 1)
      resultadoFinal()
    }
  }

  return (
    <form className={styles.questions}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta} />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button 
          onClick={handleNext}
          disabled={active}>Próxima</button>
      )}
    </form>
  )
}

export default Questions