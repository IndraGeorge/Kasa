import styles from '../styles/pages/Error.module.scss'
import { NavLink } from 'react-router-dom'

function Error() {
    return (

        <div className={styles.body}>
            <h1 className={styles.error}> 404 </h1>
            <h2 className={styles.error__text}>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to='/' className={styles.error__link}>
                <p className={styles.error__return} >Retourner sur la page d'accueil</p>
            </NavLink>
        </div>


    )
}

export default Error