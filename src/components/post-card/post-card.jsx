import styles from "./post-card.module.css";

export const PostCard = ({ post, active, setActive }) => {
  return (
    <li className={active === post.id ? `${styles.card} ${styles.card_active}` : styles.card} onClick={() => (active !== post.id ? setActive(post.id) : setActive(""))} >
      
        <h2 className={styles.title}> {post.title} </h2>
        <p className={styles.body}> {post.body} </p>
    
    </li>
  );
};
