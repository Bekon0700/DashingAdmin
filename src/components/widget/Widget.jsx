import './widget.scss'

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {
    let data;
    const amount = 15840
    const diff = 25
    switch(type){
        case 'user':
            data = {
                title: 'Bekon',
                isMoney: false,
                link: 'Visit all users',
                icon: <PersonOutlineOutlinedIcon className='icon' 
                style={{
                    color: 'crimson',
                    backgroundColor: 'rgba(255, 0, 0, 0.2)'
                }}
                />
            }
            break
        case 'order':
            data = {
                title: 'Order',
                isMoney: false,
                link: 'View all orders',
                icon: <ShoppingCartOutlinedIcon className='icon' 
                style={{
                    color: 'goldenrod',
                    backgroundColor: 'rgba(218, 135, 32, 0.2)'
                }}
                />
            }
            break
        case 'earning':
            data = {
                title: 'Earnings',
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOnOutlinedIcon className='icon' 
                style={{
                    color: 'green',
                    backgroundColor: 'rgba(0, 128, 0, 0.2)'
                }}
                />
            }
            break
        case 'balance':
            data = {
                title: 'Balance',
                isMoney: true,
                link: 'View balance',
                icon: <AccountBalanceWalletOutlinedIcon className='icon' 
                style={{
                    color: 'purple',
                    backgroundColor: 'rgba(128, 0, 128, 0.2)'
                }}
                />
            }
            break
        default:
            break
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && '$'} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget