import styles from '../styles/components/Cards.module.scss'
import { Link } from 'react-router-dom'

function LogementsCard({ title, cover, id }) {

    return (

        <>
            <Link className={styles.link} to={`/logement/${id}`}>
                <div className={styles.card} >
                    <img className={styles.card__img} src={cover} alt='logements'></img>

                    <p className={styles.card__name}>{title}</p>

                </div>
            </Link>
        </>

    )
}

export default LogementsCard