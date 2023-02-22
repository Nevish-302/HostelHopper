import './App.css';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import {CookiesProvider} from 'react-cookie'
import { useParams } from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About';
import Index from './components/Index';
import Contact from './components/ContactUs';
import Main from './components/Main'
import SecMain from './components/SecMain'
import SignUp from './components/Signup'

function App() {

  

  return (
    <>
    <BrowserRouter>
    <CookiesProvider>
    <Navbar/>
    <Routes> 
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/' element={<Index/>}/>
    <Route exact path='/main' element={<Main/>}/>
    <Route exact path='/mainext' element={<SecMain/>}/>
    <Route exact path ='/signup' element={<SignUp />} />
    </Routes>
    <Contact />
    </CookiesProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
