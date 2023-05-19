import { Avatar } from '@mui/material'
import React from 'react'
// import mime from 'mime-types'
import './PostDisplay.css'
import {  ChatBubbleOutline, ShareOutlined, ThumbUpAltOutlined } from '@mui/icons-material'


export default function PostDisplay({postProfile,image,user,text,timestamp}) {

  
    // const fileType = mime.contentType(image);
    // console.log(fileType)
    // if (fileType === 'image/jpeg') {
    //   console.log('This is an image');
    //    image =fileType
    // } else if (fileType === 'video/mp4') {
    //   console.log('This is a video');
    //   const video =fileType
    // } else {
    //   console.log('This is not an image or video');
    // }
  return (
    <div className='postDisplay' style={{width:"625px"}}>
      <div className='postDisplay__profile'>
        <Avatar className='postDisplay__avatar' src ={postProfile}/>
        <div className='postDisplay__info'>
        <h4>{user}</h4>
        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
        
      </div>
      <div className='postDisplay__text'>
            <p>{text}</p>
        </div>
      <div className='postDisplay__post'>
        {
          image && < img src={image} alt="" style={{width:"625px"}} />
        }
        
      </div>
      {/* <div className='postDisplay__post'>
       {video && <video src={video} controls id='video' ></video>}
      </div> */}
      <div className="postDisplay__option">
      <div className="postDisplay__option--like post__icon">
        <ThumbUpAltOutlined />
        <span>Like</span>
      </div>
      <div className="postDisplay__option--comment post__icon">
        <ChatBubbleOutline />
        <span>Comment</span>
      </div>
      <div className="postDisplay__option--share post__icon">
        <ShareOutlined />
        <span>Share</span>
      </div>
      </div> 
    </div>
  )
}
