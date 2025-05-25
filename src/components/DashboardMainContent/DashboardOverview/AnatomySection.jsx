import styles from "../../../styles/AnatomySection.module.css";

// You can replace this with your own SVG or anatomy image.


//give your own image path
// import humanBodyImage from "../../../assets/human-body-placeholder.png";

const indicators = [
  { label: "Healthy Heart", color: "green" },
  { label: "Lungs", color: "red" },
  { label: "Teeth", color: "orange" },
  { label: "Bone", color: "blue" }
];

function AnatomySection() {
  return (
    <div className={styles.container}>
      <img src={""} alt="Human Anatomy" className={styles.image} />
      <div className={styles.indicators}>
        {indicators.map((item, idx) => (
          <div key={idx} className={styles.indicator}>
            <span
              className={styles.dot}
              style={{ backgroundColor: item.color }}
            ></span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnatomySection;
