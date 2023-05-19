import React,{ useEffect, useState} from 'react'
import './Post.css'
import PostDisplay from './PostDisplay'
// import Image from '../../asset/image/IMG_5418.jpg'
// import PostImage from '../../asset/image/IMG-20220702-WA0007.jpg'
// import PostVideo from '../../asset/image/VID-20230405-WA0002.mp4'
// import {AuthContext} from '../Context/AuthContext'
import db from '../../firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
export default function Post() {
  const [posts , setPosts] = useState()
//   useEffect(() => {
//     db.collection('posts')
//       .orderBy('timestamp', "desc")
//       .onSnapshot((snapShot) => 
//       setPosts(snapShot.docs.map(doc => ({
//           id: doc.id,
//           data: doc.data()
//           }
//       )))) 
// }, [])
console.log(posts);
useEffect(() => {
  const fetchData = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "posts"), orderBy("timestamps", "desc"))
    );
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(data);
  };

  fetchData();
}, [posts]);



  return (
    <div className='post'>
      {/* <PostDisplay postProfile = {user.photoURL} image ={PostImage} user ={user.displayName} text ='Wow &#128151; &#128525;'/>
      <PostDisplay postProfile = {user.photoURL} image ="https://images.unsplash.com/photo-1624862762003-8b04581301aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=942&q=80" user = {user.displayName} text ='Today the best photo?'/>
      <PostDisplay postProfile = {user.photoURL} video ={PostVideo} user = {user.displayName}text ='شیر کے بھاگنے کی رفتار زیادہ سے زیادہ 58 کلومیٹر فی گھنٹہ ہوتی ہے لیکن اگر الیکشن کے ڈر سے بھاگ رہا ہو تو سپیڈ 120 کلومیٹر فی گھنٹہ ہو جاتی ہے'/> */}
      {posts?.map((post) =>(
      <PostDisplay
      key={post.id}
      postProfile ={post.postProfile}
      image={post.image}
      user ={post.user}
      text={post.text}
      timestamp = {post.timestamps}
      />

      ))}
    </div>
  )
  }
