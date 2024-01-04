
import "./Navbar.css"
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import VITE from  "/images/vite.svg"

export default function Navbar() {
    return (
        <nav>
    <a href="#top">
      <li>
        <p>Top</p>
        <AiOutlineHome className="icon" />
        <img src={VITE} alt="" />
      </li>
    </a>
    
        </nav>
    )
}

export const NavItems = () => {
    return (
        <li>navitem</li>
    )
}