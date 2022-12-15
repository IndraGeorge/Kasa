import style from '../styles/components/Tags.module.scss'

function Tags({ props }) {
    return (
        <div className={style.tags}>
            {props.map((tag, index) => (
                <p key={index} className={style.tags__names} tag={tag}> {tag}</p>
            ))}
        </div>
    )
}

export default Tags