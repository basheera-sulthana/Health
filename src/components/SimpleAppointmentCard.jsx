import styles from "../styles/SimpleAppointmentCard.module.css";

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{time}</p>
    </div>
  );
}

export default SimpleAppointmentCard;
