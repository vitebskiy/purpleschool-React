import styles from "./TitleCard.module.css";

function TitleCard({ text }) {
  return (
    <>
      <h2 className={styles["card-title"]}>{text}</h2>
    </>
  );
}

export default TitleCard;
