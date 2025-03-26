import avatar from "../../images/avatar.jpg";
import styles from "./user-card.module.css";

export const UserCard = ({ user, active, setActive, setActivePost }) => {
    
  const handleClick = () => {
    active !== user.id ? setActive(user.id) : setActive("");
    setActivePost('')
  };

  return (
    <li className={styles.user} onClick={handleClick}>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" className={styles.avatar_image} />
      </div>
      <div className={ active === user.id ? `${styles.info} ${styles.info_active}` : styles.info } >
        <h2 className={styles.name}>{user.username}</h2>
        <p className={styles.email}>{user.email}</p>
      </div>
    </li>
  );
};
