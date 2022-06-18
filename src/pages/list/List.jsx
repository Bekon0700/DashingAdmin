import './userList.scss'

import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'
import DataTable from '../../components/dataTable/DataTable'


const List = () => {
  return (
    <div className='userList'>
      <SideBar />
      <div className="userListContainer">
        <NavBar />
        <div className="tableContainer">
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default List