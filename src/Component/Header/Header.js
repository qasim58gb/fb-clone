import React,{useContext} from 'react'
import Logo from '../../asset/logo/android-chrome-512x512.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StoreIcon from '@mui/icons-material/Store';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import Image from'../../asset/image/IMG_5418.jpg'
import {AuthContext} from '../Context/AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
// import {app} from '../../firebase'

export default function Header() {
  function handleSignOut() {
  
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }
  const {user} = useContext(AuthContext)
  
  return (
    <>
     <div className="header">
        <div className="header__left">
            <img src={Logo} alt="" />
           <div className="header__input">
           <SearchIcon />
            <input type="text" placeholder='Search Facebook'/>
           </div>
        </div>
        
        <div className="header__center">
          <div className="header__option header__option--active">
            <HomeIcon />
          </div>
          <div className="header__option">
            <GroupIcon />
          </div>
          <div className="header__option">
            <SmartDisplayIcon />
          </div>
          <div className="header__option">
            <StoreIcon />
          </div>
          <div className="header__option">
            <VideogameAssetOutlinedIcon />
          </div>
        </div>
        <div className="header__right">
  
          <IconButton
         onClick={handleSignOut}
>
            <LogoutIcon />
          </IconButton>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <div className="header__info">
              <Avatar src={user.photoURL} />
              <h6>{user.displayName}</h6>
          </div>
        </div>
     </div> 
    </>
  )
}
