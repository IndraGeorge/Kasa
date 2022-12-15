import style from '../styles/components/Slideshow.module.scss'
import arrowleft from '../assets/arrow-left.png'
import arrowright from '../assets/arrow-right.png'
import { useState } from 'react'


function Slideshow({ props }) {

    const [slideIndex, setSlideIndex] = useState(0)

    const slideImg = props.length

    // Si l'utilisateur se trouve à la dernière image,alors on affiche la première image
    const next = () => {

        if (slideIndex === slideImg - 1) {

            setSlideIndex(0)

        } else {

            setSlideIndex(slideIndex + 1)

        }

    }

    // Si l'utilisateur se trouve à la première image,alors on affiche la dernière image
    const prev = () => {

        if (slideIndex === 0) {

            setSlideIndex(slideImg - 1)

        } else {

            setSlideIndex(slideIndex - 1)
        }

    }

    return (

        <div className={style.carrousel}>

            {props.map((data, index) => (

                <div key={index} className={index === slideIndex ? `${style.container}` : ""}>

                    {slideIndex === index &&
                        <img
                            className={style.container__img}
                            src={data} alt='kaza' />
                    }

                </div>

            ))}

            {slideImg > 1 ? (

                <div className={style.arrows}>
                    <img className={style.arrows__arrowleft} onClick={prev} src={arrowleft} alt="flèche"></img>
                    <img className={style.arrows__arrowright} onClick={next} src={arrowright} alt="flèche"></img>
                </div>

            ) : null
            }

            {slideImg > 1 ? (

                <div className={style.bulletpoint}>
                    {slideIndex + 1}/{slideImg}

                </div>

            ) : null
            }

        </div>

    )

}


export default Slideshow

