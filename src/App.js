import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './style/darkMode.scss'

import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'

import { userInputs, productInputs } from './formInput';

import { useSelector } from 'react-redux';

function App() {
  const modeInfo = useSelector(state => state.modeInfo)
  const isDark = modeInfo.darkMode
  return (
    <div className={isDark ? "App dark" : "App"}>
      {/* <div className='main'>
        <SideBar />
        <div className='mainContainer'>
          <NavBar />
        </div>
      </div> */}
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title='Add new User' />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title='Add new Product' />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
