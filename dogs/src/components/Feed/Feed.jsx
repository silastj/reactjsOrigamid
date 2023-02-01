import styles from './feed.module.css'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'
import { useState } from 'react';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null)

  return (
    <div className={styles.feed}>
      { modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>
  );
};

export default Feed;
