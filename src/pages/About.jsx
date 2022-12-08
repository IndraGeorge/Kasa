import style from '../styles/pages/About.module.scss'
import PictureBanner from '../assets/banner-apropos.png'
import Collapse from '../components/Collapse'
import Data from '../data/about.json'


function Apropos() {
    return (
        <div className={style.body}>

            <div className={style.banner}>
                <img className={style.banner__img} src={PictureBanner} alt='montagne'></img>
            </div>

            <div className={style.collapses}>

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

export default Apropos

