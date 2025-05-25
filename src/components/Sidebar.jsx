import styles from "../styles/Sidebar.module.css";

// Import Material UI Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import BarChartIcon from "@mui/icons-material/BarChart";
import ScienceIcon from "@mui/icons-material/Science";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";

const navLinks = [
  { name: "Dashboard", icon: <DashboardIcon className={styles.icon} /> },
  { name: "History", icon: <HistoryIcon className={styles.icon} /> },
  { name: "Calendar", icon: <CalendarMonthIcon className={styles.icon} /> },
  { name: "Appointments", icon: <EventAvailableIcon className={styles.icon} /> },
  { name: "Statistics", icon: <BarChartIcon className={styles.icon} /> },
  { name: "Tests", icon: <ScienceIcon className={styles.icon} /> },
  { name: "Chat", icon: <ChatBubbleOutlineIcon className={styles.icon} /> },
  { name: "Support", icon: <SupportAgentIcon className={styles.icon} /> },
  { name: "Setting", icon: <SettingsIcon className={styles.icon} /> }
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Healthcare.</div>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>General</p>
        <ul className={styles.navList}>
          {navLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              {link.icon}
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
