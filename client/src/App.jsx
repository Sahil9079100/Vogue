import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Studentpage from './component/student/Studentpage';
import './index.css';
const App = () => {
  return (
    <div>

<BrowserRouter>

<Routes>


<Route   path='/student/page' element={<Studentpage/>}  />


</Routes>



</BrowserRouter>





    </div>
  )
}

export default App;

