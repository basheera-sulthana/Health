import styles from "../../styles/CalendarView.module.css";

const appointments = [
  { day: 4, times: ["09:00", "11:00"] },
  { day: 7, times: ["13:00"] },
  { day: 15, times: ["15:00"] }
];

const appointmentCards = [
  {
    title: "Dentist Appointment",
    time: "09:00 AM",
    person: "Dr. Smith"
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00 AM",
    person: "Dr. John"
  }
];

function CalendarView() {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const isAppointmentDay = (day) =>
    appointments.some((appt) => appt.day === day);

  const getTimesForDay = (day) =>
    appointments.find((appt) => appt.day === day)?.times || [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>October 2021</h2>
      <div className={styles.calendarGrid}>
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`${styles.dayCell} ${
              isAppointmentDay(day) ? styles.highlight : ""
            }`}
          >
            <span>{day}</span>
            <div className={styles.times}>
              {getTimesForDay(day).map((time, index) => (
                <span key={index} className={styles.timeSlot}>
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.appointmentCards}>
        {appointmentCards.map((appt, index) => (
          <div key={index} className={styles.card}>
            <h3>{appt.title}</h3>
            <p>{appt.time}</p>
            <p>{appt.person}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
