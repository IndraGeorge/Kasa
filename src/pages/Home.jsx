import styles from '../styles/pages/Home.module.scss'
import Data from '../data/logements.json'
import LogementsCard from '../components/Cards'
import BannerImg from '../assets/banner-accueil.png'


function Home() {

    return (

        <div>

            <div className={styles.body}>

                <div className={styles.banner}>
                    <h1 className={styles.banner__h1}>Chez vous, partout et ailleurs</h1>
                    <img className={styles.banner__img} src={BannerImg} alt='paysage'></img>
                </div>

                <div className={styles.container}>
                    <div className={styles.row}>
                        {Data.map(logement => (
                            <LogementsCard
                                key={logement.id}
                                id={logement.id}
                                title={logement.title}
                                cover={logement.cover} />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home

