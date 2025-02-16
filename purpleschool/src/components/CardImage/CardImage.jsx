import styles from './CardImage.module.css';

function CardImage({ src }) {
	return <img className={styles["card-img"]} src={src} />;
}

export default CardImage;