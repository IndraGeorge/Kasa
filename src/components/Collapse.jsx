import Vector from '../assets/Vector.png'
import { useState } from 'react'
import style from '../styles/components/Collapse.module.scss'


function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleToogle = () => {
        setIsOpen(!isOpen)
    }


    // On change le nom de la classe si le collapse est ouvert 
    return (
        <div>

            <div className={`${style.inactive} ${isOpen && `${style.active}`}`} onClick={handleToogle}>

                <div className={style.inactive__title} >{title}</div>
                <img className={`${style.inactive__icon} ${isOpen && `${style.active__icon}`}`}
                    src={Vector} alt='accordéon' onClick={handleToogle} ></img>

            </div>

            <div className={`${style.inactive__bloctext} ${isOpen && `${style.active__bloctext}`}`}>

                <div className={style.inactive__text}>{content}</div>

            </div>

        </div>
    )
}

export default Collapse