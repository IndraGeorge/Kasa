import style from '../styles/components/Slideshow.module.scss'
import arrowleft from '../assets/arrow-left.png'
import arrowright from '../assets/arrow-right.png'
//import {useState} from 'react'

function Slideshow({ pictures }) {

    //const [slide, setSlide]=useState()

    return (

        <div>
            <div className={style.container}>
                <img className={style.container__img} src={pictures} alt='kaza'></img>

                <div className={style.arrows}>
                    <img className={style.arrows__arrowleft} onClick={(e) => console.log(e)} src={arrowleft} alt="flèche"></img>
                    <img className={style.arrows__arrowright} onClick={(e) => console.log(e)} src={arrowright} alt="flèche"></img>
                </div>

            </div>
        </div>

    )

}


export default Slideshow