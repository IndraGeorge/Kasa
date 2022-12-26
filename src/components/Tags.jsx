import styles from '../styles/components/Tags.module.scss'

function Tags({ props }) {
    return (
        <div className={styles.tags}>
            {props.map((tag, index) => (
                <span key={index} className={styles.tags__names} tag={tag}> {tag}</span>
            ))}
        </div>
    )
}

export default Tags