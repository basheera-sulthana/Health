import styles from "../../../styles/HealthStatusCards.module.css";

const cards = [
  { title: "Lungs", status: "Needs Attention", color: "red", date: "25 Oct" },
  { title: "Teeth", status: "Healthy", color: "green", date: "18 Oct" },
  { title: "Bone", status: "Monitor", color: "orange", date: "10 Oct" }
];

function HealthStatusCards() {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.header}>
            <h3>{card.title}</h3>
            <span
              className={styles.statusDot}
              style={{ backgroundColor: card.color }}
            ></span>
          </div>
          <p className={styles.status}>{card.status}</p>
          <p className={styles.date}>Last checked: {card.date}</p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
