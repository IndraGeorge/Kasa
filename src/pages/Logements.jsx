import React from 'react'
import { useParams } from 'react-router-dom'
import style from '../styles/pages/Logement.module.scss'
import Data from '../data/logements.json'
import Slideshow from '../components/Slideshow'
import Tags from '../components/Tags'
import Ratings from '../components/Ratings'
import Collapse from '../components/Collapse'

function Logement() {

    // On récupère l'id dans l'url
    const { id } = useParams()
    // On récupère les informations correspondants à l'id
    const accomodation = Data.find(data => data.id === id)
    const { title, location, pictures, host, tags, rating, description, equipments } = accomodation


    return (
        <div className={style.body}>

            <div className={style.slide}>
                <Slideshow
                    props={pictures}
                />
            </div>

            <div className={style.container}>

                <div className={style.info} >
                    <h1 className={style.info__title}>{title}</h1>
                    <h2 className={style.info__location}>{location}</h2>
                    <Tags
                        props={tags} />
                </div>

                <div className={style.bloc}>
                    <div className={style.hosts}>
                        <h3 className={style.hosts__name}> {host.name} </h3>
                        <img className={style.hosts__img} src={host.picture} alt="hôtes" />
                    </div>
                    <Ratings
                        props={rating} />
                </div>

            </div>

            <div className={style.collapse}>

                <div className={style.collapse__description}>
                    <Collapse
                        title={<h3 className={style.collapse__title}> Description </h3>}
                        content={<p className={style.collapse__content}>{description}</p>}
                    />
                </div>

                <div className={style.collapse__equipment}>
                    <Collapse
                        title={<h3 className={style.collapse__title} > Équipements </h3>}
                        content={equipments.map((equipment, index) =>
                            <li className={style.collapse__content} key={index}>{equipment}</li>
                        )}
                    />

                </div>

            </div>

        </div>
    )
}

export default Logement

