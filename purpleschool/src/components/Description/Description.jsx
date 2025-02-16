import styles from './Description.module.css'

function Description ({descr}) {
	return (
		<>
			<p className={styles["description"]}>{descr}</p>
		</>
	)
}

export default Description