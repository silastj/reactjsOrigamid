import styles from './feedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { useEffect } from 'react'
import { PHOTO_GET } from '../service/api'
import Error from '../Error/index'
import Loading from '../Loading/Loading'
import PhotoContent from '../PhotoContent/index'

const FeedModal = ({photo}) => {
  console.log('foot ', photo)
  const {data, error, loading, request} = useFetch()
console.log('data ', data)

  useEffect(() => {
    const{url, options} = PHOTO_GET(photo.id)
    request(url, options)
  },[photo, request])


  return(
   <div className={styles.feedModal}>
    {error && <Error error={error}/>}
    {loading && <Loading/>}
    {data && 
      <PhotoContent data={data} />    
    }
   </div>
  )
}

export default FeedModal;