import styles from "../styles/Header.module.css";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";

function Header() {
  return (
    <header className={styles.header}>
      {/* Search Bar */}
      <div className={styles.searchWrapper}>
        <SearchIcon className={styles.searchIcon} />
        <input type="text" placeholder="Search" className={styles.searchInput} disabled />
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <button className={styles.addBtn}>
          <AddIcon />
        </button>

        <NotificationsNoneIcon className={styles.notificationIcon} />

        <div className={styles.profile}>
          <img
            src="https://via.placeholder.com/32"
            alt="User_icon"
            className={styles.user_icon}
          />
          <span className={styles.username}>John Doe</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
