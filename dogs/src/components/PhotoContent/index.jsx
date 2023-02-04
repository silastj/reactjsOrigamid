import styles from "./photocontent.module.css";
import { Link } from 'react-router-dom'
import PhotoComments from "../PhotoComments";
import { ReactComponent as Olho} from '../../Assets/visualizacao-black.svg'

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  console.log('acessos ',photo)

  return (
    <div className={styles.PhotoContent}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.center}>
        <p className={styles.link}>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <span className={styles.visualizacoes}><Olho/> {photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/foto/${photo.id}`} className={styles.title}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso}kg</li>
          <li>{photo.idade === 1 ? `${photo.idade}ano` : `${photo.idade}anos`} </li>          
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments}/>
    </div>
  );
};

export default PhotoContent;
