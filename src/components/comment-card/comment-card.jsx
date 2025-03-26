import styles from "./comment-card.module.css";

export const CommentCard = ({ comment, active, setActive }) => {
  return (
    <li className={styles.card} >
        <p className={styles.email}> {comment.email} </p>
        <h2 className={styles.name}> {comment.name} </h2>
        <p className={styles.body}> {comment.body} </p>
    
    </li>
  );
};
