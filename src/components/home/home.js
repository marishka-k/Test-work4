import { CommentCard } from "../comment-card/comment-card";
import { PostCard } from "../post-card/post-card";
import { UserCard } from "../user-card/user-card";
import styles from './home.module.css'

export default function Home({ isLoading, activeUser, setActiveUser, arrUsers, activePost, setActivePost, arrPosts, arrComments }) {
  
  return (
    <div className={styles.home}>      
      <div className={styles.content}>                     
        {arrUsers.length > 0 
          ? <ul className={styles.users}>
              {
                arrUsers.map((user) => {                      
                  return (
                    <UserCard user={user} id={user.id} active={activeUser} setActive={setActiveUser} setActivePost={setActivePost} />
                  );
                })}
            </ul>
          : <p className={styles.text}> ничего не найдено </p>
        }

        <div className={styles.messages}>
          <p className={styles.text}> Посты </p>
          {arrPosts.length > 0 
            ? <ul className={styles.posts}>
              {
                arrPosts.map((post) => {
                  return (
                    <PostCard post={post} id={post.id} active={activePost} setActive={setActivePost} />
                  );
                })}
            </ul>
          : <p> {activeUser !== '' ? 'ничего не найдено' : ''} </p>            
          }
          <p className={styles.text}>Комментарии </p>
          {arrComments.length > 0 
            ? <ul className={styles.comments}>
              {
                arrComments.map((comment) => {
                  return (
                    <CommentCard comment={comment} id={comment.id} />
                  );
                })}
            </ul>
          : <p className={styles.text}> {activePost !== '' ? 'ничего не найдено' : ''} </p>            
          }

        </div>
               
      </div>
    </div>
  );
}
