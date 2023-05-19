import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'


export default function index() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post />
    </div>
  )
}
