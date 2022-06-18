import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'
import User from '../../components/singleUser/User'
import Chart from './../../components/chart/Chart'
import List from '../../components/list/List'
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
            <User />
            <Chart aspect={3/1} title='User spending(last 6 months)'/>
        </div>
        <div className="bottom">
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single