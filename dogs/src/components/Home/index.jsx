import styles from './home.module.css'
import Feed from '../Feed/Feed'
import Head from '../Head';

const Home = () => {
  return(
    <section className={styles.home}>
      <Head
      title="Fotos"
      description="Home do site Dogs, com o feed de fotos."
      />
      <Feed/>
    </section>
  )
}

export default Home;