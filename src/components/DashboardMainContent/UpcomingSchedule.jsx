import styles from "../../styles/UpcomingSchedule.module.css";
import SimpleAppointmentCard from "../SimpleAppointmentCard";

const scheduleData = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health Checkup Complete", time: "10:00 AM" },
      { title: "Ophthalmologist", time: "12:00 PM" }
    ]
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "09:30 AM" },
      { title: "Neurologist", time: "02:00 PM" }
    ]
  }
];

function UpcomingSchedule() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>The Upcoming Schedule</h2>
      {scheduleData.map((group, idx) => (
        <div key={idx} className={styles.dayGroup}>
          <h4>{group.day}</h4>
          <div className={styles.cards}>
            {group.appointments.map((appt, index) => (
              <SimpleAppointmentCard
                key={index}
                title={appt.title}
                time={appt.time}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
