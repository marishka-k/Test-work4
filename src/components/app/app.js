
import React , { useEffect, useState } from 'react';
import Header from '../app-header/app-header';
import { useDispatch, useSelector } from 'react-redux';
//import { getUsersUsername } from '../../services/actions/users-username';
import { getUsers } from '../../services/actions/users';
import Main from '../main/main';
import { getPosts } from '../../services/actions/posts';
import styles from './app.module.css'


function App() {
  const [arrPosts, setArrPosts] = useState([])
  const [arrUsers, setArrUsers] = useState([])
  const [filterPost,  setFilterPost] = useState([])
  
  const [activePost, setActivePost] = useState('')
  const [activeUser, setActiveUser] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch();  

  useEffect(() => {
    console.log('activeUser', activeUser);
    
    
    let _filterPost= 'userId'
   
    if (activeUser !== '') {    
      
      _filterPost = `userId=${activeUser}`
         
      } else {
        _filterPost = 'userId=0'
      }
  
    setFilterPost(_filterPost)
   console.log('_filterPost', _filterPost);
   
    
  }, [activeUser]);

  useEffect(() => {         
    dispatch(getUsers());    
  }, [dispatch]);

  useEffect(() => {    
    setIsLoading(true)  
      dispatch(getPosts(filterPost))
    
  }, [dispatch, filterPost]);

  const posts = useSelector((store) => store.posts);
  const users = useSelector((store) => store.users);
 // const usersUsername = useSelector((store) => store.usersUsername);

  useEffect(() => {
    let _arrPosts = []
    if (posts) {
      console.log('posts', posts);
      
      _arrPosts = [...posts.posts]
      
    }
    let _arrUsers = []
    if (users) {
      _arrUsers = [...users.users]
      
    }
   console.log('_arrUsers', _arrUsers);
   console.log('_arrPosts', _arrPosts);
   
    setArrPosts(_arrPosts)  //выводит первые 5 элементов массива
    setArrUsers(_arrUsers)  //выводит первые 5 элементов массива
    setIsLoading(false)
  }, [posts, users]);
  

  return (
    <body className={styles.page}>
      <Header />
      <Main isLoading={isLoading } activeUser={activeUser} setActiveUser={setActiveUser} arrUsers={arrUsers}  activePost ={activePost} setActivePost={setActivePost} arrPosts={arrPosts}/>      
    </body>  
  );
}

export default App;
