import style from '../styles/layout/Header.module.scss'
import logo from '../assets/LOGO.svg'
import { NavLink } from 'react-router-dom'


function header() {

    let styleLink = { textDecoration: 'underline' }

    return (


        <div className={style.header}>

            <NavLink to='/' className={style.header__logo} >
                <img className={style.header__img} src={logo} alt="kasa" ></img>
            </NavLink>

            <nav className={style.header__nav} >

                <ul className={style.header__ul}>

                    <li>
                        <NavLink to='/'
                            className={style.header__link}
                            style={({ isActive }) => isActive ? styleLink : null}
                        >Accueil</NavLink>

                    </li>

                    <li>
                        <NavLink to='/apropos'
                            className={style.header__link}
                            style={({ isActive }) => isActive ? styleLink : null}
                        >A propos</NavLink>
                    </li>

                </ul>

            </nav>


        </div>

    )

}

export default header

