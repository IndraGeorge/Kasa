import style from '../styles/components/Cards.module.scss'
import { Link } from 'react-router-dom'

function LogementsCard({ title, cover, id }) {

    return (

        <div className={style.container}>
            <Link className={style.link} to={`/logement/${id}`}>
                <div className={style.card} >
                    <img className={style.card__img} src={cover} alt='logements'></img>

                    <h2 className={style.card__name}>{title}</h2>

                </div>
            </Link>

        </div>
    )
}

export default LogementsCard