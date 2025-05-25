import styles from "../../styles/ActivityFeed.module.css";

const weeklyActivity = [
  { day: "Mon", count: 1 },
  { day: "Tue", count: 0 },
  { day: "Wed", count: 2 },
  { day: "Thu", count: 1 },
  { day: "Fri", count: 3 },
  { day: "Sat", count: 0 },
  { day: "Sun", count: 1 }
];

function ActivityFeed() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Activity</h2>
      <p className={styles.summary}>3 appointments this week</p>

      <div className={styles.barChart}>
        {weeklyActivity.map((data, index) => (
          <div key={index} className={styles.barWrapper}>
            <div
              className={styles.bar}
              style={{ height: `${data.count * 25}px` }}
              title={`${data.count} appointments`}
            />
            <span className={styles.label}>{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
