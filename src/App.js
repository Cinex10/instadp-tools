// import  {useState} from 'react';
// import Modal from './components/Modal'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { Route,Routes } from 'react-router-dom';
import ReelPage from './pages/ReelPage';
const App = () =>   {
  
  return (
    // <Helmet>
      <Routes>
   <Route exact path='/' element={<HomePage/>}>
    
   
   </Route>
   <Route exact path='/hello' element={<AboutPage/>}>
    
   </Route>
   <Route exact path='/reel' element={<ReelPage/>}>
    
   </Route>
   </Routes>
     
  );
}

export default App;

 



