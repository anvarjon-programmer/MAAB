
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Asking from './page/Asking/Asking'
import Conditain from './page/Conditain/Conditain'
import Course from './page/Course/Course'
import Hero from './page/Hero/Hero'
import Income from './page/Income/Income'
import MaabAcademy from './page/MaabAcademy/MaabAcademy'
import Registr from './page/registration/Registr'

function App() {

  return (
    <>
    <Header/>
     <Hero/>
     <Conditain/>
     <Course/>
     <Income/>
     <MaabAcademy/>
     <Asking/>
     <Registr/>
     <Footer/>
    </>
  )
}

export default App
