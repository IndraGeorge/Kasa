import styles from '../styles/layout/Header.module.scss'
import logo from '../assets/LOGO.svg'
import { NavLink } from 'react-router-dom'

function Header() {

    return (

        <div className={styles.header}>

            <NavLink to='/Kasa' className={styles.header__logo} >
                <img className={styles.header__img} src={logo} alt="logo" ></img>
            </NavLink>

            <nav className={styles.header__nav} >

                <ul className={styles.header__ul}>

                    <li>
                        <NavLink to='/Kasa'
                            className={({ isActive }) => isActive ? `${styles.header__link} ${styles.active}`
                                : styles.header__link}
                        >Accueil</NavLink>

                    </li>

                    <li>
                        <NavLink to='/apropos'
                            className={({ isActive }) => isActive ? `${styles.header__link} ${styles.active}`
                                : styles.header__link}
                        >A propos</NavLink>
                    </li>

                </ul>

            </nav>

        </div>

    )

}

export default Header

