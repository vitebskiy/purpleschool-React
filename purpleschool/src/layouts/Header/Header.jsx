import Favorites from '../../components/Favorites/Favorites'
import Nav from '../../components/Nav/Nav'
import './Header.css'

function Header () {
	return (
		<>
			<div className="header">
				<Favorites />
				<Nav />
			</div>
		</>
	)
}

export default Header