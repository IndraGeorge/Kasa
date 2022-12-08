import styles from '../styles/components/Header.module.scss'
import logo from '../assets/LOGO.svg'
import { NavLink } from 'react-router-dom'


function header() {

    let styleLink = { textDecoration: 'underline' }

    return (
        <div>

            <div className={styles.header}>
                <img className={styles.header__logo} src={logo} alt="kasa" ></img>

                <nav className={styles.header__nav} >

                    <ul className={styles.header__ul}>

                        <li>
                            <NavLink to='/'
                                className={styles.header__link}
                                style={({ isActive }) => isActive ? styleLink : null}>Accueil</NavLink>

                        </li>
                        <li>
                            <NavLink to='/apropos'
                                className={styles.header__link}
                                style={({ isActive }) => isActive ? styleLink : null}>A propos</NavLink>
                        </li>
                    </ul>

                </nav>


            </div>

        </div>

    )

}

export default header