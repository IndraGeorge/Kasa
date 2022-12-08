import style from '../styles/components/Collapse.module.scss'
import Vector from '../assets/Vector.png'
import { useState } from 'react'
import '../styles/components/Collapse.module.scss'

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleToogle = e => {
        setIsOpen(!isOpen)

    }

    return (
        <div>

            <div className={`${style.collapse} ${isOpen && 'active'}`}>

                <p className={style.collapse__title} onClick={handleToogle}>{title}</p>
                <img className={style.collapse__icon} src={Vector} alt='a-propos'></img>

            </div>

            <div className={style.collapse__bloctext}>

                <p className={style.collapse__text}>{content}</p>

            </div>

        </div>
    )
}

export default Collapse