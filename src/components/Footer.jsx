import style from '../styles/components/Footer.module.scss'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
    return (
        <div className={style.footer}>

            <div className={style.footer__block}>
                <div className={style.footer__content}>
                    <Link to='/'>
                        <img className={style.footer__logo} src={logo} alt='kasa'></img>
                    </Link>
                    <p className={style.footer__p}><FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-c" /> 2020 Kasa.All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer