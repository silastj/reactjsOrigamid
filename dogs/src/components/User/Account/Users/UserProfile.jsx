import { useParams } from 'react-router-dom'
import Feed from '../../../Feed/Feed'
import Head from '../../../Head'
import styles from './user.module.css'


const UserProfile = () => {
  const {user} = useParams()
  return (
    <section className={styles.UserProfile}>
      <Head
      title={user}
      description={user}
      />
      <h1>{user}</h1>
      <Feed user={user}/>
    </section>
  )
}

export default UserProfile