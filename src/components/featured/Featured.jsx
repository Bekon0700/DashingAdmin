import './featured.scss'

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <span className="title">Total Revenue</span>
            <MoreVertOutlinedIcon />
        </div>
        <div className="bottom">
            <div className="progressBar">
                <CircularProgressbar value='69' text={`${69}%`} strokeWidth={4}/>;
            </div>
            <span className="title">
                Total Sales today
            </span>
            <span className="amount">
                $420
            </span>
            <span className="nb">
                previous transaction cannot be visited
            </span>
            <div className="items">
                <div className="item">
                    <span className="title">
                        Target
                    </span>
                    <div className="profit positive">
                        <KeyboardArrowDownOutlinedIcon />
                        $ 12.4k
                    </div>
                </div>
                <div className="item">
                    <span className="title">
                        Last week
                    </span>
                    <div className="profit negative">
                        <ExpandLessOutlinedIcon />
                        $ 12.4k
                    </div>
                </div>
                <div className="item">
                    <span className="title">
                        Last Month
                    </span>
                    <div className="profit positive">
                        <KeyboardArrowDownOutlinedIcon />
                        $ 12.4k
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured