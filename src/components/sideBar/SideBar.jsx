import React from 'react'
import './sideBar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sideBar'>
        <div className="top">
            <Link to='/' className='link'>
                <span className="logo">DashingAdmin</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon' />
                    <Link to='/' className='link'>
                        <span>DashBoard</span>
                    </Link>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineOutlinedIcon className='icon' />
                    <Link to='/users' className='link'>
                        <span>Users</span>
                    </Link>
                </li>
                <li>
                    <Inventory2OutlinedIcon className='icon' />
                    <Link to='/products' className='link'>
                        <span>Products</span>
                    </Link>
                </li>
                <li>
                    <CreditCardOutlinedIcon className='icon' />
                    <span>Oders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsOutlinedIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon' />
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSuggestOutlinedIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <ManageAccountsOutlinedIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default SideBar