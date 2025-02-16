import styles from './Nav.module.css'

function Nav () {
	return (
		<>
			<nav className={styles["nav"]}>
				<ul className={styles["nav__list"]}>
					<li className={styles["nav__item"]}>
						<a href="#!" className={styles["nav__link"]}>Поиск фильмов</a>
					</li>
					<li className={styles["nav__item"]}>
						<a href="#!" className={styles["nav__link"]}>Мои фильмы <span className={styles["nav__count"]}>2</span> </a>
					</li>
					<li className={styles["nav__item"]}>
						<a href="#!" className={styles["nav__link"]}>Войти <img src="/sign-in.svg" alt="Иконка войти" /></a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav