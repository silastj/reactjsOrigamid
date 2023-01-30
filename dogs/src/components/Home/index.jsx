import styles from './home.module.css'
import Feed from '../Feed/Feed'

const Home = () => {
  return(
    <section className={styles.home}>
      <Feed/>
    </section>
  )
}

export default Home;