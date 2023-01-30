import styles from './feed.module.css'

const FeedPhotosItem = ({ img, title }) => {
  return (
    <li className={styles.photo}>
      <img src={img} alt={title} />
      <p>{title}</p>
    </li>
  );
};

export default FeedPhotosItem;
