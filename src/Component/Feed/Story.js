import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Story.css'

export default function Story({image ,ProfileSrc ,title}) {
  return (
    <div className='story' style={{backgroundImage:`url(${image})`}}>
      <Avatar className='story__avatar' src ={ProfileSrc} />
      <h5>{title}</h5>
    
    </div>
  )
}
