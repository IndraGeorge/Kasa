import styles from '../styles/pages/About.module.scss'
import PictureBanner from '../assets/banner-apropos.png'
import BannerMobile from '../assets/banner-apropos2.png'
import Collapse from '../components/Collapse'
import Data from '../data/about.json'


function About() {

    return (
        <div className={styles.body}>

            <div className={styles.banner}>
                <img className={styles.banner__img} src={PictureBanner} alt='montagne'></img>
                <img className={styles.banner__imgmobile} src={BannerMobile} alt='montagne'></img>
            </div>

            <div className={styles.collapses}>

                {
                    Data.map((data, index) => (
                        <Collapse
                            key={`${data.title}-${index}`}
                            title={data.title}
                            content={data.content}>
                        </Collapse>
                    ))
                }

            </div>

        </div>
    )
}

export default About

