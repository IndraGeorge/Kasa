import styles from '../styles/layout/Footer.module.scss'
import logo from '../assets/LOGO.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from "@fortawesome/free-regular-svg-icons"


function Footer() {
    return (

        <footer className={styles.footer}>

            <div className={styles.footer__block} >
                <div className={styles.footer__content}>
                    <NavLink to='/'>
                        <img className={styles.footer__logo} src={logo} alt='logo'></img>
                    </NavLink>
                    <p className={styles.footer__p}><FontAwesomeIcon icon={faCopyright} /> 2020 Kasa.All rights reserved</p>
                </div>
            </div>

        </footer>

    )
}

export default Footer


