import styles from './feed.module.css'
import { ReactComponent as Olho} from '../../Assets/visualizacao-black.svg'


const FeedPhotosItem = ({ photo, img, title, acessos, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={img} alt={title} />
      <p>{title}</p>
      <span><Olho/><strong>{acessos}</strong></span>
    </li>
  );
};

export default FeedPhotosItem;
