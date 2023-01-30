import styles from './feed.module.css'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'

const Feed = () => {
  return (
    <div className={styles.feed}>
      <FeedPhotos/>
      {/* <FeedModal/> */}
    </div>
  );
};

export default Feed;
