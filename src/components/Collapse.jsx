import style from '../styles/components/Collapse.module.scss'
import Vector from '../assets/Vector.png'
import { useState } from 'react'

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleToogle = () => {
        setIsOpen(!isOpen)
    }


    // On change le nom de la classe si le collapse est ouvert 
    return (
        <div>

            <div className={`${style.collapse} ${isOpen && `${style.active}`}`}>

                <p className={style.collapse__title} onClick={handleToogle}>{title}</p>
                <img className={`${style.collapse__icon} ${isOpen && `${style.active__icon}`}`}
                    src={Vector} alt='a-propos' onClick={handleToogle} ></img>

            </div>

            <div className={`${style.collapse__bloctext} ${isOpen && `${style.active__bloctext}`}`}>

                <p className={style.collapse__text}>{content}</p>

            </div>

        </div>
    )
}

export default Collapse