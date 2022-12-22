import style from '../styles/components/Cards.module.scss'
import { Link } from 'react-router-dom'

function LogementsCard({ title, cover, id }) {

    return (

        <>
            <Link className={style.link} to={`/logement/${id}`}>
                <div className={style.card} >
                    <img className={style.card__img} src={cover} alt='logements'></img>

                    <p className={style.card__name}>{title}</p>

                </div>
            </Link>
        </>

    )
}

export default LogementsCard