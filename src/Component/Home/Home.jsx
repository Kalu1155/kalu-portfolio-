import avaterImg from "../../assets/Images/photo_2024-05-21_13-35-55.jpg"
import { ReactTyped } from "react-typed"
import TextChange from "../TextChange"

const Home = () => {
  return (
    <>
      <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md pt-10">
        <h1><TextChange/></h1>
          <h1 className="text-3xl md:text-4xl font-bold flex leading-none tracking-tighter"> <ReactTyped
            strings={[
              "Welcome to my website",
              "I'm a software developer",
              "I'm a full stack developer",
              "I'm a web developer",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop /></h1>
          <p className="text-sm md:text-2xl tracking-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur sapiente dicta neque adipisci earum quia, nulla.</p>
          <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
        </div>
        <div>
          <img className="w-2/5" src={avaterImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home