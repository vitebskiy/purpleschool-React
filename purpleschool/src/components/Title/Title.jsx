import './Title.css'

function Title ({title, description}) {
	return (
		<>
			<h2 className='title'>{title}</h2>
			{description ? <p className='title__descr'>{description}</p>: null }
		</>
	)
}

export default Title