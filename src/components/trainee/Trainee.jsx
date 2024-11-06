import { Route, Routes } from 'react-router-dom'
import Login from '../common/login/Login'
import MyCourses from './MyCourses/MyCourses'
const Trainee = () => {
  return (

    <div>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/trainne/mycourses' element={<MyCourses/>}/>
    </Routes>
          
    </div>
  )
}

export default Trainee