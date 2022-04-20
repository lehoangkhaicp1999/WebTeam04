/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

import Defaullayout from './container/Defaullayout';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
 return(
   <BrowserRouter>
   <Routes>
     <Route path="/*" element={<Defaullayout/>}/>
   </Routes>
   </BrowserRouter>
 )
}

export default App;
