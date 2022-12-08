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

// import BannerImg from '../assets/banner-accueil.png'
// import styles from '../styles/components/Banner.module.scss'

// function Banner() {

//     return (
//         <div>

//             <div className={styles.container}>
//                 <h1 className={styles.container__h1}>Chez vous, partout et ailleurs</h1>
//                 <img className={styles.container__img} src={BannerImg} alt='kaza'></img>
//             </div>
//         </div>
//     )
// }

// export default Banner

//import styles from '../styles/components/Banner.module.scss'