import './Nav.css'

function Nav () {
	return (
		<>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<a href="#!" className="nav__link">Поиск фильмов</a>
					</li>
					<li className="nav__item">
						<a href="#!" className="nav__link">Мои фильмы <span className="nav__count">2</span> </a>
					</li>
					<li className="nav__item">
						<a href="#!" className="nav__link">Войти <img src="/sign-in.svg" alt="Иконка войти" /></a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav