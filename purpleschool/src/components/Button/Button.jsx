import './Button.css'

function Button ({text}) {

	const clicked = () => {
		alert('Поиск')
	}


	return (
		<>
			<button onClick={clicked} className="button">{text}</button>
		</>
	)
}

export default Button