import styles from './opinions.module.css'
import React, { useState, useEffect } from 'react'
import ButtonMore from "../ButtomMore"
import ButtonLike from '../ButtomLike'
import StarIcon from '../StarNew'
import LikeOff from '../ButtomLike/assets/icons/likeOff.png'
import LikeOn from '../ButtomLike/assets/icons/likeOn.png'

const quantLike = 2
const comments = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
const percentage = 90

const Opinions = () => {
  const [comentario, setComentario] = useState(comments)
  const [letterTotal, setLetterTotal] = useState(comments.length)
  const [qtLetterStart, setQtLetterStart] = useState(10)
  const [qtLetter, setQtLetter] = useState(10)
  const [icon, setIcon] = useState(false)
  const [countLike, setCountLike] = useState(quantLike)
  const [like, setLike] = useState(false)



  useEffect(() => {
    setComentario(comments)
    setLetterTotal(comentario.length)
  }, [comments, comentario, letterTotal])

  function handleClickMore() {

    if (letterTotal >= 10) {
      setQtLetter(letterTotal)
    }
    if (letterTotal === qtLetter) {
      setQtLetter(qtLetterStart)
    }
  }

  function handleSend() {
    const likeValue = 1
    setIcon(!icon)
    if (countLike && !like) {
      setCountLike(countLike + likeValue)
      setLike(true)
    }
    if (countLike && like) {
      setCountLike(countLike - likeValue)
      setLike(false)
    }
  }
  return (
    <div className={styles.opinions}>
      <p><strong>Quantidade de letras:</strong>{letterTotal > 1 ? `${letterTotal} letras.` : `${letterTotal} letra.`} </p>
      <p><strong>Comentarios: </strong>{letterTotal >= qtLetter ? comentario.substring(0, qtLetter) : comentario.substring(0, letterTotal)}</p>

      {letterTotal >= 10 && qtLetter <= 10 ? (
        <ButtonMore
          title={'Exibir Mais'}
          onClick={handleClickMore}
        />
      ) : (
        ''
      )}
      {letterTotal >= 10 && qtLetter > 10 &&
        <ButtonMore
          title={'Exibir Menos'}
          onClick={handleClickMore}
        />}
      <section>
        <div className={styles.container}>
          <StarIcon className={styles.star} />
          <div className={styles.overlay} style={{ width: `${100 - percentage}%` }} />
        </div>
      </section>
      <footer>
        <ButtonLike
          icon={icon == false ? LikeOff : LikeOn}
          title="Esta avaliação foi útil?"
          count={countLike}
          onClick={handleSend}
        />
      </footer>
    </div>



  )
}

export default Opinions