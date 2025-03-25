import { PostCard } from "../post-card/post-card";
import { UserCard } from "../user-card/user-card";
import styles from './home.module.css'

export default function Home({ isLoading, activeUser, setActiveUser, arrUsers, activePost, setActivePost, arrPosts }) {
  
  return (
    <div className={styles.home}>
      <h1 className={styles.title} >Сообщения</h1>
      <div className={styles.content}>                     
            {arrUsers.length > 0 
              ? <ul className={styles.users}>
                  {
                    arrUsers.map((user) => {
                      console.log('user in map', user);
                      
                      return (
                        <UserCard user={user} id={user.id} active={activeUser} setActive={setActiveUser} />
                      );
                    })}
                </ul>
              : <p> ничего не найдено </p>
            }

          
            {arrPosts.length > 0 
             ? <ul className={styles.users}>
                {
                  arrPosts.map((post) => {
                    return (
                      <PostCard post={post} id={post.id} active={activePost} setActive={setActivePost} />
                    );
                  })}
              </ul>
            : <p> ничего не найдено </p>            
            }

            <div></div>
               
      </div>
    </div>
  );
}
