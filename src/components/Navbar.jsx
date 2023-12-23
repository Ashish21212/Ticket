import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Airticket from './Airticket';
import Busticket from './Busticket';
import Contact from './Contact';
import Errorpage from './Errorpage';

const Navbar = () => {
  return (
    <>
      <Routes>
        <Route path='/' Component={()=><Home/>} />
        <Route path='/service' Component={()=><Airticket/>}/>
        <Route path='/contact' Component={()=><Contact/>}/>
        <Route path='/about' Component={()=><Busticket/>}/>
        <Route path='*' Component={Errorpage}/>
      </Routes>
    </>
  )
}

export default Navbar;
