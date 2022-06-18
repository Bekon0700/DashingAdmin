import './navBar.scss'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import sampleImg from './../../asset/sample_profile.jpeg'

import { useDispatch, useSelector } from 'react-redux';
import {darkModeOn, darkModeOff} from './../../modeSlice/modeSlice'

const NavBar = () => {
  const dispatch = useDispatch()
  const modeInfo = useSelector(state => state.modeInfo)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='search...'/>
          <SearchOutlinedIcon className='icon' />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            {
              modeInfo.darkMode ? <Brightness4Icon onClick={() => dispatch(darkModeOff())} className='icon'/> : <DarkModeOutlinedIcon onClick={() => dispatch(darkModeOn())} className='icon' />
            }
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img src={sampleImg} alt='profile image' className='avater'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar