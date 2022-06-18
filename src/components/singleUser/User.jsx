import './user.scss'

import proPic from './../../asset/sample_profile.jpeg'

const User = () => {
  return (
    <div className='user'>
        <div className="top">
            <span className="title">Information</span>
            <span className="edit">Edit</span>
        </div>
        <div className="bottom">
            <img className='profileImg' src={proPic} alt='avater'/>
            <div className="right">
                <p className="name">Jane Doe</p>
                <p className="info">Email: Jane@Doe.com</p>
                <p className="info">Phone No: +1 729 658 478</p>
                <p className="info">Address: 21st baker street, london.</p>
                <p className="info">Country: England</p>
            </div>
        </div>
    </div>
  )
}

export default User