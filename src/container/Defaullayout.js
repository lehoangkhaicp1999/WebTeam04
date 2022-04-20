
import Header from "./Header";
import routes from './../routes';
import { Route, Routes } from "react-router-dom";
import Footer from './Footer';

const Defaullayout = ()=>{
return (
    
  <>
  <Header/>
  <Routes>
    {
      routes.map((route,idx) => (
        <Route key={idx} path={route.path} element={route.component}/>
      ))
    }
  </Routes>
  <Footer/>
  </>
)
}
export default Defaullayout;