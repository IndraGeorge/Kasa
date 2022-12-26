import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import styles from '../styles/pages/Logement.module.scss'
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
    const { title, location, pictures, host, tags, rating, description, equipments } = accomodation || {};

    /* Si l'id est correct alors on affiche les détails du logement
       sinon on reconduit l'utilisateur vers la page d'erreur*/

    return accomodation ? (
        <div className={styles.body}>

            <Slideshow
                props={pictures}
            />

            <div className={styles.container}>

                <div className={styles.info} >
                    <h1 className={styles.info__title}>{title}</h1>
                    <h2 className={styles.info__location}>{location}</h2>
                    <Tags
                        props={tags} />
                </div>

                <div className={styles.bloc}>
                    <div className={styles.hosts}>
                        <h3 className={styles.hosts__name}> {host.name} </h3>
                        <img className={styles.hosts__img} src={host.picture} alt="hôtes" />
                    </div>
                    <Ratings
                        props={rating} />
                </div>

            </div>

            <div className={styles.collapse}>

                <div className={styles.collapse__description}>
                    <Collapse
                        title={<h3 className={styles.collapse__title}> Description </h3>}
                        content={<p className={styles.collapse__content}>{description}</p>}
                    />
                </div>

                <div className={styles.collapse__equipment}>
                    <Collapse
                        title={<h3 className={styles.collapse__title}> Équipements </h3>}
                        content={equipments.map((equipment, index) =>
                            <li className={styles.collapse__content} key={index}>{equipment}</li>
                        )}
                    />

                </div>

            </div>

        </div>
    ) : <Navigate to="/Error" />
}

export default Logement

