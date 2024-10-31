import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navebar from '../components/Navebar';
import Footer from '../components/Footer';


function Root() {
  return (
    <div>
        <header>
            <Navebar/>
        </header>
        <main>
          <Outlet/>
        </main>
        <footer>
        <Footer/>
        </footer>
    </div>
  )
}

export default Root