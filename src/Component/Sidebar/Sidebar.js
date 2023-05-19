import React,{useContext} from 'react'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import HistoryIcon from '@mui/icons-material/History';
import FlagIcon from '@mui/icons-material/Flag';
import MovieIcon from '@mui/icons-material/Movie';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Image from '../../asset/image/IMG_5418.jpg';
import './Sidebar.css'
import { AuthContext } from '../Context/AuthContext';

export default function Sidebar() {
  const {user}  = useContext(AuthContext)

  return (
    <div className='sidebar__prop'>
      <SidebarRow src ={user.photoURL} title ={user.displayName}/>
      <SidebarRow Icon ={PeopleIcon} title ='Friends'/>
      <SidebarRow Icon ={PeopleIcon} title ='Friends'/>
      <SidebarRow Icon ={PeopleIcon} title ='Friends'/>
      <SidebarRow Icon ={PeopleIcon} title ='Friends'/>
      <SidebarRow Icon ={BookmarkIcon} title ='Saved'/>
      <SidebarRow Icon ={WorkHistoryIcon} title ='Most Recent'/>
      <SidebarRow Icon ={GroupsIcon} title ='Groups'/>
      <SidebarRow Icon ={StoreIcon} title ='Marketplace'/>
      <SidebarRow Icon ={SmartDisplayIcon} title ='Watch'/>
      <SidebarRow Icon ={HistoryIcon} title ='History'/>
      <SidebarRow Icon ={FlagIcon} title ='Pages'/>
      <SidebarRow Icon ={MovieIcon} title ='Reel'/>
      <SidebarRow Icon ={ExpandMoreIcon} title ='See more'/>
    </div>
  )
}
