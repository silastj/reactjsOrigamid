import { useRef, useEffect, useState } from 'react';
import styles from './componentref.module.css'

const ComponentRef = () => {

  const video = useRef(null);
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput ] = useState('teste');
  const inputElement = useRef();

  useEffect(() => {
    console.log('current ',video.current?.currentTime)
  },[])


  function handleClick(){
    setComentarios([...comentarios, input])
    setInput('')
    inputElement.current.focus('')
  }
  
  return  (
    <div>      
    <ul>
      {comentarios && 
        comentarios.map((comentario) => (
          <li>{comentario}</li>
        ))
      }
    </ul>
    <input  
      type="text"
      ref={inputElement}
      value={input}
      onChange={({target}) => setInput(target.value)} 
    />
      <video className={styles.classref} ref={video}></video>
      <button onClick={handleClick}>Adicionar</button>
    </div>

  )
}

export default ComponentRef;