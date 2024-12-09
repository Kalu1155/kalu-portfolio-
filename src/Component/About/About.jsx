import { IoArrowForward } from "react-icons/io5"
import aboutImg from '../../assets/Images/photo_2024-05-21_13-35-55.jpg'


const About = () => {
  return (
    <>
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <div>
            <h2 className="text-2xl md:text-4xl font-bold">About</h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="md:h-80" src={aboutImg} alt="About img" />

                <ul>
                  <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>

                    <span className="w-96">
                      <h1 className="text-xl md:text-2xl leading-normal">FRONTEND DEVELOPER</h1>
                      <p className="text-sm md:text-md leading-tight"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime alias veritatis provident cupiditate delectus, eaque at. Reprehenderit veritatis id repudiandae. Sunt quidem odit quaerat soluta earum blanditiis ad est.</p>
                    </span>
                  </div>

                  <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>

                    <span className="w-96">
                      <h1 className="text-xl md:text-2xl leading-normal">DATABASE DEVELOPER</h1>
                      <p className="text-sm md:text-md leading-tight"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime alias veritatis provident cupiditate delectus, eaque at. Reprehenderit veritatis id repudiandae. Sunt quidem odit quaerat soluta earum blanditiis ad est.</p>
                    </span>
                  </div>
                  <div className="flex gap-3 py-4">
                    <IoArrowForward size={30} className="mt-1"/>

                    <span className="w-96">
                      <h1 className="text-xl md:text-2xl leading-normal">BACKEND DEVELOPER</h1>
                      <p className="text-sm md:text-md leading-tight"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime alias veritatis provident cupiditate delectus, eaque at. Reprehen</p>
                    </span>
                  </div>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default About