import styles from '../styles/components/Header.module.scss'
import logo from '../assets/LOGO.svg'
import { Link } from 'react-router-dom'


function header() {

    return (
        <div className={styles.header}>

            <img className={styles.header__logo} src={logo} alt="kasa" ></img>

            <nav className={styles.header__nav}>

                <Link to='/' className={styles.header__link}>Accueil</Link>
                <Link to='/apropos' className={styles.header__link}>A propos</Link>

            </nav>

        </div>

    )

}

export default header