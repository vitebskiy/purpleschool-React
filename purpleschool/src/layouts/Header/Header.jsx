import Favorites from '../../components/Favorites/Favorites'
import Nav from '../../components/Nav/Nav'
import styles from './Header.module.css'

function Header () {
	return (
		<>
			<header className={styles["header"]}>
				<Favorites />
				<Nav />
			</header>
		</>
	)
}

export default Header