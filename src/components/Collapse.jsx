import Vector from '../assets/Vector.png'
import { useState } from 'react'
import styles from '../styles/components/Collapse.module.scss'


function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleToogle = () => {
        setIsOpen(!isOpen)
    }


    // On change le nom de la classe si le collapse est ouvert 
    return (
        <>

            <div className={styles.inactive} onClick={handleToogle}>

                <div className={styles.inactive__title} >{title}</div>
                <img className={`${styles.inactive__icon} ${isOpen && `${styles.active__icon}`}`}
                    src={Vector} alt='accordéon' onClick={handleToogle} ></img>

            </div>

            <div className={`${styles.inactive__bloctext} ${isOpen && `${styles.active__bloctext}`}`}>

                <div className={styles.inactive__text}>{content}</div>

            </div>

        </>
    )
}

export default Collapse