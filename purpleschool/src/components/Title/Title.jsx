import styles from './Title.module.css'

function Title ({title, description}) {
	return (
		<>
			<h2 className={styles['title']}>{title}</h2>
			{description ? <p className={styles['title__descr']}>{description}</p>: null }
		</>
	)
}

export default Title