import style from '../styles/layout/Footer.module.scss'
import logo from '../assets/LOGO.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from "@fortawesome/free-regular-svg-icons"


function Footer() {
    return (

        <footer className={style.footer}>

            <div className={style.footer__block} >
                <div className={style.footer__content}>
                    <NavLink to='/'>
                        <img className={style.footer__logo} src={logo} alt='kasa'></img>
                    </NavLink>
                    <p className={style.footer__p}><FontAwesomeIcon icon={faCopyright} /> 2020 Kasa.All rights reserved</p>
                </div>
            </div>

        </footer>

    )
}

export default Footer


