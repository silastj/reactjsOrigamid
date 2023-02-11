import { useParams } from 'react-router-dom'
import Feed from '../../../Feed/Feed'
import styles from './user.module.css'


const UserProfile = () => {
  const {user} = useParams()
  return (
    <section className={styles.UserProfile}>
      <h1>{user}</h1>
      <Feed user={user}/>
    </section>
  )
}

export default UserProfile