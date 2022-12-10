import style from '../styles/components/Slideshow.module.scss'
import arrowleft from '../assets/arrow-left.png'
import arrowright from '../assets/arrow-right.png'
import { useState } from 'react'


function Slideshow({ props }) {

    const [slideIndex, setSlideIndex] = useState(0)

    //const lenght = props.lenght

    const next = () => {

        setSlideIndex(slideIndex)
        console.log(slideIndex)
    }

    return (

        <div>

            {props.map((data, index) => (

                <div key={index} className={index === slideIndex ? `${style.container}` : ""}>

                    {slideIndex === index &&
                        <img
                            className={style.container__img}
                            src={data} alt='kaza' />
                    }
                </div>

            ))}

            <div className={style.arrows}>
                <img className={style.arrows__arrowleft} onClick={next} src={arrowleft} alt="flèche"></img>
                <img className={style.arrows__arrowright} onClick={next} src={arrowright} alt="flèche"></img>
            </div>

        </div>

    )

}


export default Slideshow