import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'
import './new.scss'

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';


const New = ({inputs, title}) => {
  const [file, setFile] = useState('')
  console.log(file)
  return (
    <div className='new'>
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="cards">
          <div className="top">
            <span className="title">{title}</span>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="urImg">
                {file ? <img src={URL.createObjectURL(file)} alt='avater' className='img'/> : 'Your image here'}
              </div>
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor='file'>
                    <DriveFolderUploadIcon />
                    Upload Your image here
                  </label>
                  <input type='file' id='file' onChange={e => setFile(e.target.files[0])} style={{display: "none"}} />
                </div>
                {
                  inputs.map(el => {
                    return(
                      <div className="formInput" key={el.id}>
                        <label>{el.label}</label>
                        <input type={el.type} placeholder={el.placeholder} />
                    </div>
                    )
                  })
                }
                <div className="formInput">
                  <button className='btn'>Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New