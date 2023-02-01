import styles from './feedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { useEffect, useState } from 'react'
import { PHOTO_GET } from '../service/api'
import Error from '../Error/index'
import Loading from '../Loading/Loading'
import PhotoContent from '../PhotoContent/index'

const FeedModal = ({photo, setModalPhoto}) => {

  const {data, error, loading, request} = useFetch()
 


  useEffect(() => {
    const{url, options} = PHOTO_GET(photo.id)
    request(url, options)
  },[photo, request])

  function handleClose(e){
    if(e.target === e.currentTarget) setModalPhoto(null)
  }

  return(
   <div className={styles.feedModal} onClick={handleClose}>
    {error && <Error error={error}/>}
    {loading && <Loading/>}
    {data && 
      <PhotoContent data={data} />    
    }
   </div>
  )
}

export default FeedModal;