import styles from "./photocontent.module.css";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import PhotoComments from "../PhotoComments";
import { ReactComponent as Olho} from '../../Assets/visualizacao-black.svg'
import { UserContext } from "../../UserContext";
import PhotoDelete from "../PhotoDelete";
import Image from "../Image";

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext)
  const { photo, comments } = data;

  return (
    <div className={styles.PhotoContent}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title}/>
        {/* <img src={photo.src} alt={photo.title} /> */}
      </div>
      <div className={styles.center}>
        <p className={styles.link}>
        {user.data && user.data.username === photo.author ? (
          <PhotoDelete id={photo.id}/>
        ): (
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
        )}
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
