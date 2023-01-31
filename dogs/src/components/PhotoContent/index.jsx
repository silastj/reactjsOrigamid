import styles from './photocontent.module.css'

const PhotoContent = ({data}) => {
  console.log(data)
  return(
    <div className={styles.PhotoContent}>
      <img src={data.photo.src} alt={data.photo.title} />
    </div>
  )
}

export default PhotoContent