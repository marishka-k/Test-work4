
import React , { useEffect, useState } from 'react';
import Header from '../app-header/app-header';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../services/actions/users';
import Main from '../main/main';
import { getPosts } from '../../services/actions/posts';
import styles from './app.module.css'
import { getComments } from '../../services/actions/comments';


function App() {
  const [arrPosts, setArrPosts] = useState([])
  const [arrUsers, setArrUsers] = useState([])
  const [isUsersLoad, setIsUsersLoad] = useState(false)
  const [arrComments, setArrComments] = useState([])
  const [filterPost,  setFilterPost] = useState('userId=1-')
  const [filterComments,  setFilterComments] = useState('postId=-1')
  
  const [activePost, setActivePost] = useState('')
  const [activeUser, setActiveUser] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch();  

  useEffect(() => {
    let _filterPost= 'userId=1-'
   
    if (activeUser !== '') {
      _filterPost = `userId=${activeUser}`        
    } else {
      _filterPost = 'userId=-1'
    }  
    setFilterPost(_filterPost)    
  }, [activeUser]);

  useEffect(() => {
    let _filterComments= 'postId=-1'
   
    if (activePost !== '') {
      _filterComments = `postId=${activePost}`        
    } else {
      _filterComments = 'postId=-1'
    }  
    setFilterComments(_filterComments)    
  }, [activePost]);

  useEffect(() => {  
    if (!isUsersLoad){
      dispatch(getUsers());
    }
  }, [dispatch, isUsersLoad]);

  useEffect(() => {  
    if (activeUser === ''){
      setFilterComments('postId=-1')
    }
  }, [dispatch, activeUser]);

  useEffect(() => {    
    setIsLoading(true)  
    dispatch(getPosts(filterPost))    
  }, [dispatch, filterPost]);

  useEffect(() => {    
    setIsLoading(true)  
    dispatch(getComments(filterComments))    
  }, [dispatch, filterComments]);

  const posts = useSelector((store) => store.posts);
  const users = useSelector((store) => store.users);
  const comments = useSelector((store) => store.comments);

  useEffect(() => {
    let _arrUsers = []
    if (users) { _arrUsers = [...users.users] }
    setArrUsers(_arrUsers)    
    setIsUsersLoad(true)
  }, [users]);

  useEffect(() => {
    let _arrPosts = []
    if (posts) _arrPosts = [...posts.posts]
    setArrPosts(_arrPosts)
  }, [posts]);

  useEffect(() => {
    let _arrComments = []
    if (comments) _arrComments= [...comments.comments]
   
    console.log('_arrComments', _arrComments);
    setArrComments(_arrComments)
  }, [comments]);
  

  return (
    <body className={styles.page}>
      <Header />
      <Main isLoading={isLoading } activeUser={activeUser} setActiveUser={setActiveUser} arrUsers={arrUsers}  activePost ={activePost} setActivePost={setActivePost} arrPosts={arrPosts} arrComments={arrComments}/>      
    </body>  
  );
}

export default App;
