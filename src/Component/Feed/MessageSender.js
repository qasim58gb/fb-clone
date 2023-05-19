import { Mood, PhotoLibrary, VideoCall } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState, useContext } from 'react'
import './MessageSender.css'
import {AuthContext} from '../Context/AuthContext'
import db from '../../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

export default function MessageSender() {
  const {user} = useContext(AuthContext)
  console.log(user);
  const [input, setInput]= useState('')
  const [imageUrl, setImageUrl]= useState('')
  const handleSubmit = (e) => {
    // e.preventDefault();
     addDoc(collection(db, "posts"), {
      text: input,
    timestamps: serverTimestamp(),
    postProfile: user.photoURL,
    user: user.displayName,
    image: imageUrl,
    });
    // console.log("Document written with ID: ", docRef.id);
    setInput("");
  setImageUrl("");
  };
 
  return (
    <div className='messageSender'>
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <div className='form'  >
        <input value={input} onChange={(e)=>setInput(e.target.value)} className='messageSender__input' type="text" placeholder={`What's in your mind ${user.displayName}`} />
            <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder='URL & image' />
            <button onClick={handleSubmit} >submit</button>
        </div>
      </div>
      <div className="messageSender__bottom">
        <div className='messageSender__option'>
        <VideoCall style={{color:'red'}} />
        <h5>Live Video</h5>
        </div>
        <div className='messageSender__option'>
        <PhotoLibrary style={{color:'green'}} />
        <h5>Photo/Video</h5>
        </div>
        <div className='messageSender__option'>
        <Mood style={{color:'orange'}} />
        <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  )
}

