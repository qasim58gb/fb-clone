import React from 'react'
import './SidebarRow.css'
import Avatar from '@mui/material/Avatar';

export default function SidebarRow({src ,Icon ,title}) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar className='sidebarRow__avatar' src={src}/>}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  )
}
