import { Route, Routes } from 'react-router-dom'
import Login from '../common/login/Login'

const Trainee = () => {
  return (

    <div>
    <Routes>
        <Route path='/login' element={<Login/>}/>
    </Routes>
          
    </div>
  )
}

export default Trainee