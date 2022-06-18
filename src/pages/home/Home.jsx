import './home.scss'


import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/list/List'


const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title='Last 6 Months(Revenue)'/>
        </div>
        <div className="listContainer">
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home