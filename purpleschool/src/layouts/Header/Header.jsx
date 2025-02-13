import Favorites from '../../components/Favorites/Favorites'
import Nav from '../../components/Nav/Nav'
import './Header.css'

function Header () {
	return (
		<>
			<header className="header">
				<Favorites />
				<Nav />
			</header>
		</>
	)
}

export default Header