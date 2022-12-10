import React from 'react'
import { useParams } from 'react-router-dom'
import style from '../styles/pages/Logement.module.scss'
import Data from '../data/logements.json'
import Slideshow from '../components/Slideshow'

function Logement() {

    const { id } = useParams()
    const accomodation = Data.find(data => data.id === id)
    const { title, location, pictures } = accomodation

    return (
        <div className={style.body}>

            <div className={style.slide}>

                <Slideshow
                    props={pictures}
                />

            </div>

            <div className={style.container}>
                <h1 className={style.container__title}>{title}</h1>
                <h2 className={style.container__location}>{location}</h2>
            </div>

        </div>
    )
}

export default Logement