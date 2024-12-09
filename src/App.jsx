import '../css/style.css'
import About from './Component/About/About'
import Experience from './Component/Experience/Experience'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Projects from './Component/Projects/Projects'
function App() {
 
  return (
    <>
   <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Footer/>
   </div>
    </>
  )
}

export default App
