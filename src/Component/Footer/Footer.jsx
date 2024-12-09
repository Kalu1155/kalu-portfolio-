import { CiLinkedin } from "react-icons/ci"
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"

const Footer = () => {
  return (
    <>
      <div id="Footer" className="flex justify-around bg-[#465697] text-white p-10 md:p- items-center">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold ">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal"> Feel Free To reach out!</h3>
        </div>

        <ul className="text-sm md:text-xl">
          <li className="flex gap-1 items-center">
            <MdOutlineEmail size={20} />
            kaludavid424@gmail.com
          </li>
          <li className="flex gap-1 items-center">
            <CiLinkedin size={20} />
            linkdlin.com/kaludavid
          </li>
          <li className="flex gap-1 items-center">
            <FaGithub size={20} />
            github.com/kalu1155
          </li>
        </ul>
        <ul className="text-sm md:text-xl">
          <li className="flex gap-1 items-center">
            <FaInstagram size={20} />
            ig.com/kalu1155
          </li>
          <li className="flex gap-1 items-center">
            <FaTiktok size={20} />
            tiktok.com/kalu1155
          </li>
          <li className="flex gap-1 items-center">
            <FaYoutube size={20} />
            youtube.com/kalu1155
          </li>
        </ul>
      </div>

    </>
  )
}

export default Footer