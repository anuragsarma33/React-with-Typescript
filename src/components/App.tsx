import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Posts from './Posts/Posts';
import Users from './Users/Users';

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Users />} />
     <Route path='/posts' element={<Posts />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;