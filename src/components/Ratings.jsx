import star from '../assets/star.svg'
import starColor from '../assets/star-color.svg'
import styles from '../styles/components/Ratings.module.scss'


function Ratings({ props }) {

    // On récupère la note de l'hôte 
    const notes = props
    // On définit par défaut 5 étoiles dans un tableau
    const stars = [1, 2, 3, 4, 5]

    return (

        <div className={styles.ratings} >

            {stars.map((item, index) =>

                notes >= item ? (
                    <img key={index.toString()} className={styles.ratings__note} src={starColor} alt='étoiles' />

                ) :
                    <img key={index.toString()} className={styles.ratings__note} src={star} alt='étoiles' />

            )}

        </div>
    )

}

export default Ratings