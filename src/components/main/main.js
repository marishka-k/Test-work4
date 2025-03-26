import Home from "../home/home";
import styles from './main.module.css'

function Main({ isLoading, activeUser, setActiveUser, arrUsers, activePost, setActivePost, arrPosts, arrComments}) {
  return (
    <main className={styles.main}>
      <Home
        isLoading={isLoading}        
        activeUser={activeUser}
        setActiveUser={setActiveUser}
        activePost ={activePost}
        setActivePost={setActivePost}
        arrUsers={arrUsers}
        arrPosts={arrPosts}
        arrComments={arrComments}
      />
    </main>
  );
}

export default Main;
